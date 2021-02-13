import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";
import { GooglePlaceApiWrapper } from "../src/services/google-place-api-wrapper";
import { HttpService } from "../src/services/http-service";
import { SuccessResponse } from "./near-by-search-success-response";
import { PlaceDetails } from "./place-details-data";

describe("Google api wrapper test", () => {
  it("should search for near by hotels by cordinates", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
        body: {
          params: {
            type: "lodging",
            location: `48.19851972979718,11.512284425816313`,
            key: "AIzaSyBHyNTKlM4rKt1uvVcs8-f7CQrgYNbqHmU",
            radius: 1500,
          },
        },
      })
      .reply(200, SuccessResponse);

    const places = new GooglePlaceApiWrapper(
      new HttpService().setClient(axios)
    );
    const response = await places.findPlace(
      48.19851972979718,
      11.512284425816313
    );
    expect(response).to.have.property("html_attributions");
    expect(response).to.have.property("results");

    expect(response.status).to.equal("OK");
    expect(response.results).length.to.be.gte(2);
    mock.reset();
  });

  it("should find a place by place id", async () => {
    const mock = new MockAdapter(axios);

    mock
      .onGet("https://maps.googleapis.com/maps/api/place/details/json", {
        body: {
          params: {
            place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
            key: "AIzaSyBHyNTKlM4rKt1uvVcs8-f7CQrgYNbqHmU",
          },
        },
      })
      .reply(200, PlaceDetails);

    const place = await new GooglePlaceApiWrapper(
        new HttpService().setClient(axios)
    ).getPlaceById("ChIJc6b2lhR3nkcRLI0oHtrK8Yw");

    expect(place).to.have.property("html_attributions");
    expect(place).to.have.property("result");

    expect(place.status).to.equal("OK");
  });
});
