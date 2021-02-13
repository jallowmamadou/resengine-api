import { BookingType } from './booking-type';

export interface BookingRepositoryType {

    /**
     * Finds bookings by hotel id.
     *
     * @param {string} hotelId
     */
    findByHotelId(hotelId: string);

    /**
     * Save a new booking
     *
     * @param Booking
     */
    saveBooking(Booking: BookingType);
}
