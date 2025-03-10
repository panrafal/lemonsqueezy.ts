interface SharedLemonsqueezyOptions {
    apiVersion?: "v1";
    baseUrl?: string;
}
declare enum LemonsqueezyDataType {
    checkouts = "checkouts",
    customers = "customers",
    discounts = "discounts",
    files = "files",
    license_key_instances = "license-key-instances",
    license_keys = "license-keys",
    order_items = "order-items",
    orders = "orders",
    products = "products",
    stores = "stores",
    subscriptions = "subscriptions",
    subscription_invoices = "subscription-invoices",
    users = "users",
    variants = "variants"
}
interface BaseLemonsqueezyResponse<TData, TLinks = {
    self: string;
}> {
    data: TData;
    errors?: Array<{
        detail: string;
        status: string | number;
        title: string;
    }>;
    jsonapi: {
        version: string;
    };
    links: TLinks;
}
interface PaginatedBaseLemonsqueezyResponse<TData, TLinks = {
    first: string;
    last: string;
}> extends BaseLemonsqueezyResponse<TData, TLinks> {
    meta: {
        page: {
            currentPage: number;
            from: number;
            lastPage: number;
            perPage: number;
            to: number;
            total: number;
        };
    };
}

interface LemonsqueezyBillingAddress {
    /**
     * A pre-filled billing address country in a ISO 3166-1 alpha-2 format
     *
     * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
     */
    country?: string;
    /**
     * A pre-filled billing address zip/postal code
     */
    zip?: string;
}
interface LemonsqueezyCheckoutData {
    billing_address?: LemonsqueezyBillingAddress;
    /**
     * An object containing any custom data to be passed to the checkout
     */
    custom?: Record<string, any>;
    /**
     * A pre-filled discount code
     */
    discount_code?: string;
    /**
     * A pre-filled email address
     */
    email?: string;
    /**
     * A pre-filled name
     */
    name?: string;
    /**
     * A pre-filled tax number
     */
    tax_number?: string;
}
interface LemonsqueezyCheckoutOptions {
    /**
     * A custom hex color to use for the checkout button
     */
    button_color?: `#${string}`;
    /**
     * If `true`, use the dark theme
     */
    dark?: boolean;
    /**
     * If `false`, hide the product description
     */
    desc?: boolean;
    /**
     * If `false`, hide the discount code field
     */
    discount?: boolean;
    /**
     * If `true`, show the checkout overlay
     *
     * @docs https://docs.lemonsqueezy.com/help/checkout/checkout-overlay
     */
    embed?: boolean;
    /**
     * If `false`, hide the store logo
     */
    logo?: boolean;
    /**
     * If `false`, hide the product media
     */
    media?: boolean;
    /**
     * If `false`, hide the "You will be charged..." subscription preview text
     */
    subscription_preview?: boolean;
}
interface LemonsqueezyCheckoutPreview {
    currency_rate: number;
    currency: string;
    discount_total_formatted: string;
    discount_total_usd: number;
    discount_total: number;
    subtotal_formatted: string;
    subtotal_usd: number;
    subtotal: number;
    tax_formatted: string;
    tax_usd: number;
    tax: number;
    total_formatted: string;
    total_usd: number;
    total: number;
}
interface LemonsqueezyProductOptions {
    /**
     * A custom description for the product
     */
    description?: string;
    /**
     * An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled
     */
    enabled_variants?: Array<string>;
    /**
     * An array of image URLs to use as the product's media
     */
    media?: Array<string>;
    /**
     * A custom name for the product
     */
    name?: string;
    /**
     * A custom text to use for the order receipt email button
     */
    receipt_button_text?: string;
    /**
     * A custom URL to use for the order receipt email button
     */
    receipt_link_url?: string;
    /**
     * A custom thank you note to use for the order receipt email
     */
    receipt_thank_you_note?: string;
    /**
     * A custom URL to redirect to after a successful purchase
     */
    redirect_url?: string;
}
/**
 * @docs https://docs.lemonsqueezy.com/api/checkouts#the-checkout-object
 */
interface LemonsqueezyCheckout {
    attributes: {
        /**
         * An object containing any prefill or custom data to be used in the checkout
         *
         * @docs https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields
         * @docs https://docs.lemonsqueezy.com/help/checkout/passing-custom-data
         */
        checkout_data: LemonsqueezyCheckoutData;
        /**
         * An object containing checkout options for this checkout
         */
        checkout_options: LemonsqueezyCheckoutOptions;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * If the value is not `null`, this represents a positive integer in cents representing the custom price of the variant
         */
        custom_price: number | null;
        /**
         * An ISO-8601 formatted date-time string indicating when the checkout expires
         *
         * Can be `null` if the checkout is perpetual
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        expires_at: Date | null;
        preview: LemonsqueezyCheckoutPreview;
        /**
         * An object containing any overridden product options for this checkout
         */
        product_options: LemonsqueezyProductOptions;
        /**
         * The ID of the store this checkout belongs to
         */
        store_id: number;
        /**
         * A boolean indicating if the returned checkout object was created within test mode
         */
        test_mode: boolean;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
        /**
         * The unique URL to access the checkout
         *
         * Note: for security reasons, download URLs are signed
         *
         * If the checkout `expires_at` is set, the URL will expire after the specified time
         */
        url: string;
        /**
         * The ID of the variant associated with this checkout
         */
        variant_id: number;
    };
    type: LemonsqueezyDataType.checkouts;
    id: string;
}
interface CreateCheckoutOptions extends SharedLemonsqueezyOptions {
    /**
     * An object containing any prefill or custom data to be used in the checkout
     *
     * @docs https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields
     * @docs https://docs.lemonsqueezy.com/help/checkout/passing-custom-data
     */
    checkout_data?: LemonsqueezyCheckoutData;
    /**
     * An object containing checkout options for this checkout
     */
    checkout_options?: LemonsqueezyCheckoutOptions;
    /**
     * A positive integer in cents representing the custom price of the variant.
     *
     * Note: If the product purchased is a subscription, this custom price is used
     * for all renewal payments. If the subscription's variant changes in the
     * future (i.e. the customer is moved to a different subscription "tier") the
     * new variant's price will be used from that moment forward.
     */
    custom_price?: number | null;
    /**
     * An ISO-8601 formatted date-time string indicating when the checkout expires
     *
     * Can be `null` if the checkout is perpetual
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    expires_at?: Date | null;
    /**
     * A boolean indicating whether to return a preview of the checkout.
     *
     * If `true`, the checkout will include a `preview` object with the checkout preview data.
     */
    preview?: boolean;
    /**
     * An object containing any overridden product options for this checkout.
     */
    product_options?: LemonsqueezyProductOptions;
    /**
     * The ID of the store this checkout belongs to.
     */
    store: string;
    /**
     * The ID of the variant associated with this checkout.
     *
     * Note: by default, all variants of the related product will be shown in the checkout, with
     * your selected variant highlighted. If you want hide to other variants, you can utilise
     * the `product_options.enabled_variants` option to determine which variant(s) are
     * displayed in the checkout.
     */
    variant: string;
}
type CreateCheckoutResult = BaseLemonsqueezyResponse<LemonsqueezyCheckout>;
interface ListAllCheckoutsOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return checkouts belonging to the store with this ID
     */
    storeId?: string;
    /**
     * Only return checkouts belonging to the variant with this ID
     */
    variantId?: string;
}
type ListAllCheckoutsResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyCheckout>>;
interface RetrieveCheckoutOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveCheckoutResult = BaseLemonsqueezyResponse<LemonsqueezyCheckout>;

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

interface LemonsqueezySubscriptionPause {
    /**
     * Defines payment pause behaviour, can be one of:
     *
     *  - `void` - If you can't offer your services for a period of time (for maintenance as an example), you can void invoices so your customers aren't charged
     *  - `free` - Offer your subscription services for free, whilst halting payment collection
     */
    mode: "void" | "free";
    /**
     * An ISO-8601 formatted date-time string indicating when the subscription will continue collecting payments
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    resumes_at: Date;
}
/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
interface LemonsqueezySubscription {
    attributes: {
        /**
         * An integer representing a day of the month (`21` equals `21st day of the month`)
         *
         * This is the day of which subscription invoice payments are collected
         */
        billing_anchor: number;
        /**
         * A boolean indicating if the subscription has been cancelled
         */
        cancelled: boolean;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * If the subscription has been cancelled, this will be an ISO-8601 formatted date-time string indicating when the subscription expires
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        ends_at: Date | null;
        /**
         * The ID of the order associated with this subscription
         */
        order_id: number;
        /**
         * The ID of the order item associated with this subscription
         */
        order_item_id: number;
        /**
         * An object containing the payment collection pause behaviour options for the subscription, if set
         *
         * The pause object can be null, which indicates payment collection is not paused
         */
        pause: LemonsqueezySubscriptionPause | null;
        /**
         * The ID of the product associated with this subscription
         */
        product_id: number;
        /**
         * The name of the product
         */
        product_name: string;
        /**
         * An ISO-8601 formatted date-time string indicating the end of the current billing cycle, and when the next invoice will be issued
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        renews_at: Date;
        /**
         * The formatted status of the subscription
         */
        status_formatted: string;
        /**
         * The status of the subscription
         *
         * One of `on_trial`, `active`, `cancelled`, `expired`
         */
        status: "on_trial" | "active" | "cancelled" | "expired";
        /**
         * The ID of the store this subscription belongs to
         */
        store_id: number;
        /**
         * The ID of the customer this subscription belongs to.
         */
        customer_id: number;
        /**
         * A boolean indicating if the returned subscription object was created within test mode
         */
        test_mode: boolean;
        /**
         * If the subscription has a free trial, this will be an ISO-8601 formatted date-time string indicating when the trial period ends
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        trial_ends_at: Date | null;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
        /**
         * An object of customer-facing URLs for managing the subscription
         */
        urls: {
            /**
             * A pre-signed URL for managing payment and billing information for the subscription
             *
             * This can be used in conjunction with Lemon.js to allow your customer to change their billing information from within your application
             *
             * The URL is valid for 24 hours from time of request
             *
             * @docs https://docs.lemonsqueezy.com/help/lemonjs/what-is-lemonjs
             */
            update_payment_method: string;
        };
        /**
         * The email address of the customer
         */
        user_email: string;
        /**
         * The full name of the customer
         */
        user_name: string;
        /**
         * The ID of the variant associated with this subscription
         */
        variant_id: number;
        /**
         * The name of the variant
         */
        variant_name: string;
        /**
         * Lowercase brand of the card used to pay for the latest subscription payment. One of visa, mastercard, amex, discover, jcb, diners or unionpay. Will be empty for non-card payments.
         */
        card_brand: string;
        /**
         * The last 4 digits of the card used to pay for the latest subscription payment. Will be empty for non-card payments.
         */
        card_last_four: string;
    };
    type: LemonsqueezyDataType.subscriptions;
    id: string;
}
interface ListAllSubscriptionsOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return subscriptions belonging to the order with this ID
     */
    orderId?: string;
    /**
     * Only return subscriptions belonging to the order item with this ID
     */
    orderItemId?: string;
    /**
     * Only return subscriptions belonging to the product with this ID
     */
    productId?: string;
    /**
     * Only return subscriptions belonging to the store with this ID
     */
    storeId?: string;
    /**
     * Only return subscriptions belonging to the variant with this ID
     */
    variantId?: string;
}
type ListAllSubscriptionsResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezySubscription>>;
interface RetrieveSubscriptionOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveSubscriptionResult = BaseLemonsqueezyResponse<LemonsqueezySubscription>;
interface UpdateSubscriptionOptions extends SharedLemonsqueezyOptions {
    /**
     * An integer representing a day of the month (`21` equals `21st day of the month`).
     * This is the day of which subscription invoice payments are collected.
     *
     * Setting this value to a valid integer (1-31) will set the billing anchor to the next occurrence of that day.
     * For example, if on the 21st of January you set the subscription billing anchor to the 1st, the next occurrence of that day is February 1st.
     * All invoices from that point on will be generated on the 1st of the month
     *
     * When setting a new billing anchor day, we calculate the next occurrence and issue a paid, prorated trial which ends on the next occurrence date.
     * When the trial ends, the customer is charged for the full prorated amount
     */
    billingAnchor?: number;
    /**
     * Set as `true` to cancel the subscription.
     *
     * You can uncancel (before the `ends_at` date) by setting to `false`
     */
    cancelled?: boolean;
    id: string;
    /**
     * An object containing the payment collection pause behaviour options for the subscription
     */
    pause?: LemonsqueezySubscriptionPause;
    /**
     * The ID of the Product Object you want to switch this subscription to.
     *
     * If set, requires a Variant Object ID
     *
     * @docs https://docs.lemonsqueezy.com/api/products
     * @docs https://docs.lemonsqueezy.com/api/variants
     */
    productId: string;
    /**
     * The ID of the Variant Object you want to switch this subscription to.
     *
     * Required if `product_id` set
     *
     * @docs https://docs.lemonsqueezy.com/api/variants
     */
    variantId: string;
}
type UpdateSubscriptionResult = BaseLemonsqueezyResponse<LemonsqueezySubscription>;
interface CancelSubscriptionOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type CancelSubscriptionResult = BaseLemonsqueezyResponse<LemonsqueezySubscription>;

/**
 * @docs https://docs.lemonsqueezy.com/api/users#the-user-object
 */
interface LemonsqueezyUser {
    attributes: {
        /**
         * A URL to the avatar image for this user. If the user has not uploaded a custom avatar, this will point to their Gravatar URL.
         */
        avatar_url: string;
        /**
         * A randomly generated hex color code for the user. We use this internally as the background color of an avatar if the user has not uploaded a custom avatar.
         */
        color: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created.
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        createdAt: Date;
        /**
         * The email address of the user.
         */
        email: string;
        /**
         * Has the value `true` if the user has uploaded a custom avatar image.
         */
        has_custom_avatar: boolean;
        /**
         * The name of the user.
         */
        name: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated.
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updatedAt: Date;
    };
    id: string;
    links: {
        self: string;
    };
    type: LemonsqueezyDataType.users;
}
interface GetUserOptions extends SharedLemonsqueezyOptions {
}
type GetUserResult = BaseLemonsqueezyResponse<LemonsqueezyUser>;

type LemonsqueezyInterval = "day" | "week" | "month" | "year";
/**
 * @docs https://docs.lemonsqueezy.com/api/variants#the-variant-object
 */
interface LemonsqueezyVariant {
    attributes: {
        /**
         * An ISO-8601 formatted date-time string indicating when the object was created
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        created_at: Date;
        /**
         * The description of the variant in HTML
         */
        description: string;
        /**
         * Has the value `true` if this variant has a free trial period
         *
         * Only available if the variant is a subscription
         */
        has_free_trial: boolean;
        /**
         * Has the value `true` if this variant should generate license keys for the customer on purchase
         */
        has_license_keys: boolean;
        /**
         * If this variant is a subscription, this is the number of intervals (specified in the `interval` attribute) between subscription billings
         *
         * For example, `interval=month` and `interval_count=3` bills every 3 months
         */
        interval_count: number | null;
        /**
         * If this variant is a subscription, this is the frequency at which a subscription is billed
         *
         * One of `day`, `week`, `month` or `year`
         */
        interval: LemonsqueezyInterval | null;
        /**
         * Has the value `true` if license keys should never expire
         *
         * Note: If the variant is a subscription, the license key expiration will be linked to the status of the subscription (e.g. the license will expire when the subscription expires)
         */
        is_license_length_unlimited: boolean;
        /**
         * Has the value `true` if license key activations are unlimited for this variant
         */
        is_license_limit_unlimited: boolean;
        /**
         * Has the value `true` if this variant is a subscription
         */
        is_subscription: boolean;
        /**
         * The maximum number of times a license key can be activated for this variant
         */
        license_activation_limit: number;
        /**
         * The unit linked with the `license_length_value` attribute. One of `days`, `months` or `years`
         *
         * For example, `license_length_value=3` and `license_length_unit=months` license keys will expire after 3 months
         */
        license_length_unit: string;
        /**
         * The number of units (specified in the `license_length_unit` attribute) until a license key expires
         */
        license_length_value: number;
        /**
         * If `pay_what_you_want` is `true`, this is the minimum price this variant can be purchased for, as a positive integer in cents
         */
        min_price: number;
        /**
         * The name of the variant
         */
        name: string;
        /**
         * Has the value `true` if this is a “pay what you want” variant where the price can be set by the customer at checkout
         */
        pay_what_you_want: false;
        /**
         * A positive integer in cents representing the price of the variant
         */
        price: number;
        /**
         * The ID of the product this variant belongs to
         */
        product_id: number;
        /**
         * The slug used to identify the variant
         */
        slug: string;
        /**
         * An integer representing the order of this variant when displayed on the checkout
         */
        sort: number;
        /**
         * The formatted status of the variant
         */
        status_formatted: string;
        /**
         * The status of the variant
         *
         * Either `pending`, `draft` or `published`
         *
         * If a variant has a `pending` status, it is considered the “default” variant and is not shown as a separate option at checkout
         */
        status: "pending" | "draft" | "published";
        /**
         * If `pay_what_you_want` is `true`, this is the suggested price for this variant shown at checkout, as a positive integer in cents
         */
        suggested_price: number;
        /**
         * If interval count of the free trial.
         *
         * For example, a variant with `trial_interval=day` and `trial_interval_count=14` would have a free trial that lasts 14 days
         */
        trial_interval_count: number;
        /**
         * The interval unit of the free trial
         *
         * One of `day`, `week`, `month` or `year`
         */
        trial_interval: string;
        /**
         * An ISO-8601 formatted date-time string indicating when the object was last updated
         *
         * @see https://en.wikipedia.org/wiki/ISO_8601
         */
        updated_at: Date;
    };
    type: LemonsqueezyDataType.variants;
    id: string;
}
interface ListAllVariantsOptions extends SharedLemonsqueezyOptions {
    /**
     * Only return variants belonging to the product with this ID
     */
    productId?: string;
}
type ListAllVariantsResult = PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyVariant>>;
interface RetrieveVariantOptions extends SharedLemonsqueezyOptions {
    id: string;
}
type RetrieveVariantResult = BaseLemonsqueezyResponse<LemonsqueezyVariant>;

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

declare class LemonsqueezyClient {
    private _apiKey;
    constructor(apiKey: string);
    /**
     * Get User
     *
     * @description Retrieves the currently authenticated user
     *
     * @docs https://docs.lemonsqueezy.com/api/users#retrieve-the-authenticated-user
     *
     * @param {Object} [options]
     *
     * @returns A user object
     */
    getUser(options?: GetUserOptions): Promise<GetUserResult>;
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
    retrieveStore(options: RetrieveStoreOptions): Promise<RetrieveStoreResult>;
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
    listAllStores(options?: ListAllStoresOptions): Promise<ListAllStoresResult>;
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
    retrieveProduct(options: RetrieveProductOptions): Promise<RetrieveProductResult>;
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
    listAllProducts(options?: ListAllProductsOptions): Promise<ListAllProductsResult>;
    /**
     * Retrieve variant
     *
     * @description Retrieves the variant with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/variants#retrieve-a-variant
     *
     * @param {String} options.id - The ID of the variant to retrieve
     *
     * @returns A variant object
     */
    retrieveVariant(options: RetrieveVariantOptions): Promise<RetrieveVariantResult>;
    /**
     * List all variants
     *
     * @description Returns a paginated list of variants
     *
     * @docs https://docs.lemonsqueezy.com/api/variants#list-all-variants
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of variant objects ordered by sort
     */
    listAllVariants(options?: ListAllVariantsOptions): Promise<ListAllVariantsResult>;
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
    retrieveFile(options: RetrieveFileOptions): Promise<RetrieveFileResult>;
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
    listAllFiles(options?: ListAllFilesOptions): Promise<ListAllFilesResult>;
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
    retrieveOrder(options: RetrieveOrderOptions): Promise<RetrieveOrderResult>;
    /**
     * List all orders
     *
     * @description Returns a paginated list of orders
     *
     * @docs https://docs.lemonsqueezy.com/api/orders#list-all-orders
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of file objects ordered by `sort`
     */
    listAllOrders(options?: ListAllOrdersOptions): Promise<ListAllOrdersResult>;
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
    retrieveOrderItem(options: RetrieveOrderItemOptions): Promise<RetrieveOrderItemResult>;
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
    listAllOrderItems(options?: ListAllOrderItemsOptions): Promise<ListAllOrderItemsResult>;
    /**
     * Retrieve subscription
     *
     * @description Retrieves the subscription with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/subscriptions#retrieve-a-subscription
     *
     * @param {String} options.id - The ID of the subscription to retrieve
     *
     * @returns A subscription object
     */
    retrieveSubscription(options: RetrieveSubscriptionOptions): Promise<RetrieveSubscriptionResult>;
    /**
     * List all subscriptions
     *
     * @description Returns a paginated list of subscriptions
     *
     * @docs https://docs.lemonsqueezy.com/api/subscriptions#list-all-subscriptions
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of subscription objects ordered by `created_at` (descending)
     */
    listAllSubscriptions(options?: ListAllSubscriptionsOptions): Promise<ListAllSubscriptionsResult>;
    /**
     * Update subscription
     *
     * @description Update an existing subscription to specific parameters. With this endpoint, you can:
     *
     *  - Upgrade & Downgrade a subscripion to a different Product or Variant
     *  - Change payment pause collection behaviour
     *  - Update the billing date for when payments are collected
     *
     * When changing the plan of a subscription, we prorate the charge for the next billing cycle.
     * For example, if a customer buys your product on April 1st for $50, they'll be charged $50 immediately.
     * If on April 15th they upgrade to your $100 product, on May 1st they'll be charged $125.
     * This is made up of $100 for renewing, $50 of used time on your upgraded $100 plan from April 15th - May 1st, and then a credited -$25 for unused time on your $50 plan.
     *
     * If downgrading a subscription, we'll issue a credit which is then applied on the next invoice.
     *
     * Changing a subscription plan may change the billing date or charge immediately if:
     *
     *  - The variant has a different billing cycle (from monthly to yearly, etc)
     *  - The subscription is no longer free, or is now free
     *  - A trial starts or ends
     *
     * @docs https://docs.lemonsqueezy.com/api/subscriptions#update-a-subscription
     *
     * @param {String} options.id - The ID of the subscription to retrieve
     *
     * @returns A subscription object
     */
    updateSubscription(options: UpdateSubscriptionOptions): Promise<UpdateSubscriptionResult>;
    /**
     * Cancel subscription
     *
     * @description Cancel an active subscription
     *
     * @docs https://docs.lemonsqueezy.com/api/subscriptions#cancel-a-subscription
     *
     * @param {String} options.id - The ID of the subscription to cancel
     *
     * @returns A subscription object
     */
    cancelSubscription(options: CancelSubscriptionOptions): Promise<CancelSubscriptionResult>;
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
    retrieveDiscount(options: RetrieveDiscountOptions): Promise<RetrieveDiscountResult>;
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
    listAllDiscounts(options?: ListAllDiscountsOptions): Promise<ListAllDiscountsResult>;
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
    retrieveLicenseKey(options: RetrieveLicenseKeyOptions): Promise<RetrieveLicenseKeyResult>;
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
    listAllLicenseKeys(options?: ListAllLicenseKeysOptions): Promise<ListAllLicenseKeysResult>;
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
    retrieveLicenseKeyInstance(options: RetrieveLicenseKeyInstanceOptions): Promise<RetrieveLicenseKeyInstanceResult>;
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
    listAllLicenseKeyInstances(options?: ListAllLicenseKeyInstancesOptions): Promise<ListAllLicenseKeyInstancesResult>;
    /**
     * Retrieve checkout
     *
     * @description Retrieves the checkout with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/checkouts#retrieve-a-checkout
     *
     * @param {String} options.id - The ID of the checkout to retrieve
     *
     * @returns A checkout object
     */
    retrieveCheckout(options: RetrieveCheckoutOptions): Promise<RetrieveCheckoutResult>;
    /**
     * List all checkouts
     *
     * @description Returns a paginated list of checkouts
     *
     * @docs https://docs.lemonsqueezy.com/api/checkouts#list-all-checkouts
     *
     * @param {Object} [options]
     *
     * @returns Returns a paginated list of checkout objects ordered by `created_at` (descending)
     */
    listAllCheckouts(options?: ListAllCheckoutsOptions): Promise<ListAllCheckoutsResult>;
    /**
     * Create checkout
     *
     * @description Create a custom checkout. Use this endpoint to create a unique checkout URL for a specific variant
     *
     * @docs https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
     *
     * @returns A checkout object
     */
    createCheckout(options: CreateCheckoutOptions): Promise<CreateCheckoutResult>;
    /**
     * Retrieve subscription invoice
     *
     * @description Retrieves a subscription invoice with the given ID
     *
     * @docs https://docs.lemonsqueezy.com/api/subscription-invoices#retrieve-a-subscription-invoice
     *
     * @param {String} options.id - The ID of the subscription to retrieve
     *
     * @returns A subscription invoice object
     */
    retrieveSubscriptionInvoice(options: RetrieveSubscriptionInvoiceOptions): Promise<RetrieveSubscriptionInvoiceResult>;
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
    listAllSubscriptionInvoices(options?: ListAllSubscriptionInvoicesOptions): Promise<ListAllSubscriptionInvoicesResult>;
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
    retrieveCustomer(options: RetrieveCustomerOptions): Promise<RetrieveCustomerResult>;
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
    listAllCustomers(options?: ListAllCustomersOptions): Promise<ListAllCustomersResult>;
}

export { LemonsqueezyClient };
