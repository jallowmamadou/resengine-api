export interface AddBookingForm {
    /**
     * ID of the hotel in question
     * @type {string}
     * @memberof Body
     */
    hotelId: any;
    /**
     * Name of the person making the reservation
     * @type {string}
     * @memberof Body
     */
    mainGuestName: any;
    /**
     * Name of the person making the reservation email address
     * @type {string}
     * @memberof Body
     */
    mainGuestEmail: any;
    /**
     * Date of arrival
     * @type {Date}
     * @memberof Body
     */
    arrivalDate: any;
    /**
     * Date of departure
     * @type {Date}
     * @memberof Body
     */
    departureDate: any;
}
