import { app } from "../src/app";
import { agent as request } from "supertest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";
import { GooglePlaceApiWrapper } from "../src/services/google-place-api-wrapper";
import { Container } from "typedi";
import { HttpService } from "../src/services/http-service";
import { SuccessResponse } from "./near-by-search-success-response";
import { PlaceDetails } from "./place-details-data";
import { Booking } from "../src/entity/Booking";
import * as dotenv from "dotenv";
import { createConnection } from "typeorm";

describe("Test API Endpoints", () => {
  let hotelId = "ChIJN1t_tDeuEmsRUsoyG83frY4";
  let apiKey = process.env.GOOGLE_API_KEY;

  before((done) => {
    dotenv.config();
    createConnection({
      type: "mysql",
      host: process.env.MYSQL_DB_HOST,
      port: 3306,
      username: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      entities: [Booking],
      synchronize: false,
      logging: false,
    })
      .then((connection) => {
        console.log("test db connected: ", connection.isConnected);
        done();
      })
      .catch(done);
  });
  it("should GET /api/hotels/search", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
        body: {
          params: {
            type: "lodging",
            location: `48.19851972979718,11.512284425816313`,
            key: process.env.GOOGLE_API_KEY,
            radius: 1500,
          },
        },
      })
      .reply(200, SuccessResponse);

    Container.set(
      GooglePlaceApiWrapper,
      new GooglePlaceApiWrapper(new HttpService().setClient(axios))
    );

    const response = await request(app).get(
      `/api/hotels/search?lat=48.1985197297971=&lng=11.512284425816313`
    );

    const responseBody = response.body;
    expect(responseBody).to.have.property("data");
    expect(responseBody).to.have.property("links");
    expect(responseBody).to.have.property("meta");
    expect(responseBody.data).length.to.be.gte(2);
    mock.reset();
  });

  it("should POST  /api/hotels/{hotelId}/bookings", async () => {
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
    const formData = {
      main_guest_name: "mamadou jallow",
      main_guest_email: "sulsira@gmail.com",
      departure_date: new Date().toISOString(),
      arrival_date: new Date().toISOString(),
    };
    const response = await request(app)
      .post(`/api/hotels/${hotelId}/bookings`)
      .send(formData)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/);

    const responseBody = response.body;
    expect(responseBody).to.have.property("data");
    expect(responseBody).to.have.property("links");
    expect(responseBody).to.have.property("meta");

    expect(responseBody.data).to.contain({
      mainGuestEmail: "sulsira@gmail.com",
    });
  });

  it("should GET  /api/hotels/{hotelId}/bookings", async () => {
    const mock = new MockAdapter(axios);

    mock
      .onGet("https://maps.googleapis.com/maps/api/place/details/json", {
        body: {
          params: {
            place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
            key: apiKey,
          },
        },
      })
      .reply(200, PlaceDetails);

    Container.set(
      GooglePlaceApiWrapper,
      new GooglePlaceApiWrapper(new HttpService().setClient(axios))
    );

    const response = await request(app).get(`/api/hotels/${hotelId}/bookings`);

    const responseBody = response.body;
    expect(responseBody).to.have.property("data");
    expect(responseBody).to.have.property("links");
    expect(responseBody).to.have.property("meta");
  });
});
