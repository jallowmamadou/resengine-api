import { Service } from "typedi";
import { HttpService } from "./http-service";
import { Client } from "@googlemaps/google-maps-services-js";

@Service()
export class GooglePlaceApiWrapper {
  constructor(public httpService: HttpService) {}

  /**
   * Finds places near you.
   *
   * @param {number} lat
   * @param {number} lng
   * @returns {Promise<PlacesNearbyResponseData>}
   */
  async findPlace(lat: number, lng: number) {
    return (await this.getClient().placesNearby({
      params: {
        type: "lodging",
        location: [lat, lng],
        radius: 1500,
        key: process.env.GOOGLE_API_KEY
      },
    })).data;
  }

  /**
   * Finds a hotel with google place id.
   *
   * @param {string} hotelId
   * @returns {Promise<PlaceDetailsResponseData>}
   */
    async getPlaceById(hotelId: string) {
      return (await this.getClient().placeDetails({
        params: {
          place_id: hotelId,
          key: process.env.GOOGLE_API_KEY
        },
      })).data;
    }

  /**
   * Gets a client to connect to googles api.
   *
   * @returns {Client}
   */
  getClient() {
      return new Client({
         axiosInstance: this.httpService.getInstance()
       });
    }
}
