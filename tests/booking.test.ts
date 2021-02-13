import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";
import { GooglePlaceApiWrapper } from "../src/services/google-place-api-wrapper";
import { HttpService } from "../src/services/http-service";
import { PlaceDetails } from "./place-details-data";
import { Container } from "typedi";
import { FindHotelBookings } from "../src/use-cases/find-hotel-bookings";
import { HotelService } from "../src/services/hotel-service";
import { AddBookingForm } from "../src/add-booking-form";

describe("Booking Tests", () => {
  let apiKey = process.env.GOOGLE_API_KEY;
  let hotelId = "ChIJN1t_tDeuEmsRUsoyG83frY4";

  it("should find bookings of a hotel", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("https://maps.googleapis.com/maps/api/place/details/json", {
        body: {
          params: {
            place_id: hotelId,
            key: apiKey,
          },
        },
      })
      .reply(200, PlaceDetails);

    Container.set(
      GooglePlaceApiWrapper,
      new GooglePlaceApiWrapper(new HttpService().setClient(axios))
    );

    await Container.get(HotelService).addBooking(
      new AddBookingForm({
        hotelId: hotelId,
        mainGuestName: "::GuestName::",
        mainGuestEmail: "example@test.com",
        arrivalDate: new Date().toISOString(),
        departureDate: new Date().toISOString(),
      })
    );

    const bookings = await new FindHotelBookings(hotelId).execute();
    expect(bookings.length).to.be.gte(1);
  });
});
