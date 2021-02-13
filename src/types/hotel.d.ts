/* tslint:disable */
/* eslint-disable */

/**
 * Reservation engine
 * This is a restful api for searching for hotels near you. You can also make reservations on a hotel
 *
 * OpenAPI spec version: 0.0.1
 * Contact: sulsiram@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface Hotel
 */
export interface HotelType {
  /**
   * ID of the hotel
   * @type {string}
   * @memberof Hotel
   */
  id: any;
  /**
   * Name of the hotel
   * @type {string}
   * @memberof Hotel
   */
  name: string;
  /**
   * Google place id
   * @type {string}
   * @memberof Hotel
   */
  placeId: string;
  /**
   * The vicinity of the hotel
   * @type {string}
   * @memberof Hotel
   */
  vicinity: string;
  /**
   * opening hours of the hotel
   * @type {any}
   * @memberof Hotel
   */
  openingHours?: any;
  /**
   * Logo of the hotel
   * @type {string}
   * @memberof Hotel
   */
  icon?: string;
  /**
   * Longitude and latitute of the hotel
   * @type {any}
   * @memberof Hotel
   */
  geometry?: any;
  /**
   * The full address of the hotel
   * @type {string}
   * @memberof Hotel
   */
  address?: string;
}