import { JsonResource } from "./json-resource";
import { SuccessResponseType } from "../types/success-response-type";
import { HotelType } from "../types/hotel";

export class HotelResource extends JsonResource {
  /**
   * Collection of a resource.
   *
   * @param places
   * @param {{}} meta
   * @param {{}} links
   * @returns {SuccessResponseType}
   */
  static collection(
    places: HotelType[],
    meta = {},
    links = {}
  ): SuccessResponseType {
    return {
      data: places.map((place) => {
        return {
          id: place.placeId,
          place_id: place.placeId,
          name: place.name,
          vicinity: place.vicinity,
          icon: place.icon,
          address: place.address,
          geometry: place.geometry,
          opening_hours: place.openingHours,
        };
      }),
      meta,
      links,
    };
  }
}
