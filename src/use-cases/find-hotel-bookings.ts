import { UseCaseType } from '../types/use-case-type';
import { Booking } from '../entity/Booking';
import { Container } from 'typedi';
import { BookingRepository } from '../repositories/booking-repository';

export class FindHotelBookings implements UseCaseType{
    private _hotelId: string;
    constructor(hotelId: string) {
        this._hotelId = hotelId;
    }

    /**
     * Finds all the bookings associated with a hotel.
     *
     * @returns {Promise<Booking[]>}
     */
    async execute() {
       return await Container.get(BookingRepository).findByHotelId(this._hotelId)
    }
}
