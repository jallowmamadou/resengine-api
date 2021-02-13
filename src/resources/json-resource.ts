import { SuccessResponseType } from "../types/success-response-type";
import { ErrorResponseType } from "../types/error-response-type";

export abstract class JsonResource {
  /**
   * Collection of a resource.
   *
   * @param resource
   * @param {{}} meta
   * @param {{}} links
   * @returns {SuccessResponseType}
   */
  static collection(
    resource: unknown[],
    meta = {},
    links = {}
  ): SuccessResponseType {
    return {
      data: resource,
      meta,
      links,
    };
  }

  /**
   * Collection of a resource.
   *
   * @param resource
   * @param {{}} meta
   * @param {{}} links
   * @returns {SuccessResponseType}
   */
  static resource(
    resource: object,
    meta = {},
    links = {}
  ): SuccessResponseType {
    return {
      data: resource,
      meta,
      links,
    };
  }

  /**
   * Parse an error response.
   *
   * @param {Error | {} | null} error
   * @param {string} humanReadable
   * @param {number} errorCode
   * @returns {ErrorResponseType}
   */
  static error(
    error: any,
    humanReadable: string = "",
    errorCode: number = 500
  ): ErrorResponseType {
    return {
      errorMessage: "message" in error ? error.message : null,
      humanMessage: humanReadable,
      errorCode: errorCode,
    };
  }
}
