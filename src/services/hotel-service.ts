import { Service } from 'typedi';
import { AddBooking } from '../use-cases/add-booking';
import { Booking } from '../entity/Booking';
import { SearchHotelsNearby } from '../use-cases/search-hotels-nearby';
import { FindHotelBookings } from '../use-cases/find-hotel-bookings';

@Service()
export class HotelService {
    /**
     * Search for hotels.
     *
     * @param {number} lat
     * @param {number} lng
     * @returns {Promise<HotelType[]>}
     */
    async searchByCoordinates(lat: number, lng: number){
        return await (new SearchHotelsNearby(lat, lng)).execute()
    }

    /**
     * Add a booking to a hotel.
     *
     * @param addBookingForm
     * @returns {Promise<Booking>}
     */
    async addBooking(addBookingForm){
        return (new AddBooking(addBookingForm)).execute()
    }

    /**
     * Finds the bookings of a hotel.
     *
     * @param {string} hotelId
     * @returns {Promise<Booking[]>}
     */
    async findBookings(hotelId: string){
        return await (new FindHotelBookings(hotelId)).execute();
    }
}
