import { UseCaseType } from "../types/use-case-type";
import { Container } from "typedi";
import { GooglePlaceApiWrapper } from "../services/google-place-api-wrapper";
import { getConnection } from "typeorm";
import { Booking } from "../entity/Booking";
import { BookingRepository } from '../repositories/booking-repository';

export class AddBooking implements UseCaseType {
  private _bookingForm;

  constructor(bookingForm) {
    this._bookingForm = bookingForm;
  }

  /**
   * Executes the process of adding a booking.
   *
   * @returns {Promise<Booking>}
   */
  async execute() {
    const hotel = await Container.get(GooglePlaceApiWrapper).getPlaceById(
      this._bookingForm.get("hotelId")
    );

    if (!hotel) {
      throw new Error(
        `Could not find the hotel with this id: ${this._bookingForm.get(
          "hotelId"
        )}`
      );
    }

    const booking = new Booking();
    booking.bookingCode = Math.floor(Math.random() * 100000).toString(16);
    booking.hotelId = this._bookingForm.get("hotelId");
    booking.mainGuestName = this._bookingForm.get("mainGuestName");
    booking.mainGuestEmail = this._bookingForm.get("mainGuestEmail");
    booking.arrivalDate = this._bookingForm.get("arrivalDate");
    booking.departureDate = this._bookingForm.get("departureDate");

    return await Container.get(BookingRepository).saveBooking(booking)
  }
}
