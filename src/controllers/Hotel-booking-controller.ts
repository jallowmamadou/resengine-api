import { Container } from "typedi";
import { BookingResource } from "../resources/booking-resource";
import { AddBookingForm } from "../add-booking-form";
import { HotelService } from "../services/hotel-service";
import { Request, Response } from "express";

export class HotelBookingController {
    /**
     * Gets all the bookings associated with a hotel.
     *
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async index(req: Request, res: Response) {
        try {
            return res
                .status(200)
                .json(
                    BookingResource.collection(
                        await Container.get(HotelService).findBookings(req.params.hotelId)
                    )
                );
        } catch (error) {
            res
                .status(500)
                .json(
                    BookingResource.error(error, "Fail to fetch hotels bookings", 500)
                );

            throw error;
        }
    }

    /**
     * Add a new booking to a hotel.
     *
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async store(req: any, res: any) {
        try {
            const addBookingForm = new AddBookingForm({
                hotelId: req.params.hotelId,
                mainGuestName: req.body.main_guest_name,
                mainGuestEmail: req.body.main_guest_email,
                arrivalDate: req.body.arrival_date,
                departureDate: req.body.departure_date,
            });

            return res
                .status(200)
                .json(
                    BookingResource.resource(
                        await Container.get(HotelService).addBooking(addBookingForm)
                    )
                );
        } catch (error) {
            res
                .status(500)
                .json(
                    BookingResource.error(error),
                    "Fail to add booking to a hotel",
                    500
                );

            throw error;
        }
    }
}
