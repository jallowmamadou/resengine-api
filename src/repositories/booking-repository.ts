import { BookingRepositoryType } from '../types/booking-repository-type';
import { BookingType } from '../types/booking-type';
import { Service } from 'typedi';
import { getConnection } from 'typeorm';
import { Booking } from '../entity/Booking';

@Service()
export class BookingRepository implements BookingRepositoryType{
    /**
     * Save a new booking.
     *
     * @param {BookingType} booking
     * @returns {Promise<BookingType & Booking>}
     */
    async saveBooking(booking: BookingType) {
        return await this.getModel().save(booking);
    }

    /**
     * Gets the booking model.
     *
     * @returns {Repository<Booking>}
     * @private
     */
    private getModel() {
        return getConnection().getRepository(Booking);
    }

    /**
     * Find bookings by hotelId
     * @param {string} hotelId
     * @returns {Promise<Booking[]>}
     */
    async findByHotelId(hotelId: string) {
        return await this.getModel()
            .createQueryBuilder("booking")
            .where("booking.hotelId = :id", { id: hotelId})
            .getMany();
    }
}
