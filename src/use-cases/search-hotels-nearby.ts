import { UseCaseType } from "../types/use-case-type";
import { Container } from "typedi";
import { GooglePlaceApiWrapper } from "../services/google-place-api-wrapper";
import { HotelType } from "../types/hotel";

export class SearchHotelsNearby implements UseCaseType {
  private _lat: number;
  private _lng: number;

  constructor(lat: number, lng: number) {
    this._lat = lat;
    this._lng = lng;
  }

  /**
   * Executes the process of finding hotels near you.
   *
   * @returns {Promise<HotelType[]>}
   */
  async execute(): Promise<HotelType[]> {
    const places = await Container.get(GooglePlaceApiWrapper).findPlace(
      this._lat,
      this._lng
    );

    if (places.status !== "OK") {
      throw new Error(places.error_message);
    }

    return places.results.map((place) => {
      return {
        id: place.place_id,
        placeId: place.place_id,
        name: place.name,
        vicinity: place.vicinity,
        icon: place.icon,
        address: place.formatted_address,
        geometry: place.geometry,
        openingHours: place.opening_hours,
      };
    });
  }
}
