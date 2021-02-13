import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";
import { GooglePlaceApiWrapper } from "../src/services/google-place-api-wrapper";
import { HttpService } from "../src/services/http-service";
import { SuccessResponse } from "./near-by-search-success-response";
import { Container } from "typedi";
import { SearchHotelsNearby } from "../src/use-cases/search-hotels-nearby";

describe("Hotel Tests", () => {
  let apiKey = process.env.GOOGLE_API_KEY;
  it("should find hotels hear coordinates", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
        body: {
          params: {
            type: "lodging",
            location: `48.19851972979718,11.512284425816313`,
            key: apiKey,
            radius: 1500,
          },
        },
      })
      .reply(200, SuccessResponse);

    Container.set(
      GooglePlaceApiWrapper,
      new GooglePlaceApiWrapper(new HttpService().setClient(axios))
    );

    const hotels = await new SearchHotelsNearby(
      48.19851972979718,
      11.512284425816313
    ).execute();

    expect(hotels.length).to.be.gte(1);
  });
});
