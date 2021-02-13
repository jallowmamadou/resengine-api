
/**
 * Fail to perform an action
 * @export
 * @interface ErrorResponseType
 */
export interface ErrorResponseType {
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    errorMessage?: string;
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    humanMessage?: string;
    /**
     *
     * @type {number}
     * @memberof ErrorResponse
     */
    errorCode?: number;
}
