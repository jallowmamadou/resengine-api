import { BookingStatusEnum } from '../enums/booking-status-enum';

export interface BookingType {
    /**
     * ID of the booking
     * @type {string}
     * @memberof Booking
     */
    id: number;
    /**
     * ID of the hotel in question
     * @type {string}
     * @memberof Booking
     */
    hotelId: string;
    /**
     * Name of the person making the reservation
     * @type {string}
     * @memberof Booking
     */
    mainGuestName: string;
    /**
     * Name of the person making the reservation email address
     * @type {string}
     * @memberof Booking
     */
    mainGuestEmail: string;
    /**
     * Updated status of the pet
     * @type {string}
     * @memberof Booking
     */
    status: BookingStatusEnum;
    /**
     * A unique public string to identify the booking
     * @type {string}
     * @memberof Booking
     */
    bookingCode: string;
    /**
     * Date of arrival
     * @type {string}
     * @memberof Booking
     */
    arrivalDate: string;
    /**
     * Date of departure
     * @type {string}
     * @memberof Booking
     */
    departureDate: string;
    /**
     * When this record was created
     * @type {string}
     * @memberof Booking
     */
    createdAt?: any;
    /**
     * When this record was last updated
     * @type {string}
     * @memberof Booking
     */
    updatedAt?: any;
    /**
     * When this record was deleted
     * @type {string}
     * @memberof Booking
     */
    deletedAt?: any;
}
