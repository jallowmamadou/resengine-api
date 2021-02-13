/**
 * Booking request response
 * @export
 * @interface BookingResponse
 */
export interface SuccessResponseType {
    /**
     *
     * @type {Booking}
     * @memberof BookingResponse
     */
    data: object | object[];
    /**
     *
     * @type {SuccessHotelsResponseMeta}
     * @memberof BookingResponse
     */
    meta?: any;
    /**
     *
     * @type {SuccessHotelsResponseLinks}
     * @memberof BookingResponse
     */
    links?: any;
}
