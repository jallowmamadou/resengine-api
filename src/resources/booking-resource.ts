import { BookingType } from '../types/booking-type';
import { SuccessResponseType } from '../types/success-response-type';
import { JsonResource } from './json-resource';

export class BookingResource extends JsonResource{
    /**
     * Collection of a resource.
     *
     * @param {BookingType[]} resource
     * @param {{}} meta
     * @param {{}} links
     * @returns {SuccessResponseType}
     */
    static collection(
        resource: BookingType[],
        meta = {},
        links = {}
    ): SuccessResponseType {
        return {
            data: resource.map((item) => {
                return {
                  id: item.id,
                  hotelId: item.hotelId,
                  mainGuestName: item.mainGuestName,
                  mainGuestEmail: item.mainGuestEmail,
                  status: item.status,
                  bookingCode: item.bookingCode,
                  arrivalDate: item.arrivalDate,
                  departureDate: item.departureDate,
                  createdAt: item.createdAt,
                  updatedAt: item.updatedAt,
                  deletedAt: item.deletedAt,
                };
            }),
            meta,
            links,
        };
    }
}
