import { Container, Service } from "typedi";
import { HotelResource } from "../resources/hotel-resource";
import { HotelService } from "../services/hotel-service";
import { Request, Response } from "express";

@Service()
export class HotelSearchController {
  /**
   * Searches for hotels around you.
   *
   * @param req
   * @param res
   * @returns {Promise<any>}
   */
  async index(req: Request, res: Response) {
    try {
      const hotels = await Container.get(HotelService).searchByCoordinates(
        Number(req.query.lat),
        Number(req.query.lng)
      );

      return res.status(200).json(HotelResource.collection(hotels));
    } catch (error) {
      res
        .status(500)
        .json(
          HotelResource.error(error, "Fail to search for hotels near by", 500)
        );
      throw error;
    }
  }
}
