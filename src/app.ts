import * as express from "express";
import { HotelSearchController } from "./controllers/hotel-search-controller";
import { HotelBookingController } from "./controllers/Hotel-booking-controller";
import { check, validationResult } from "express-validator";
import { HotelResource } from "./resources/hotel-resource";
import { Request, Response } from "express";

export const app = express();

app.use(express.json());

app.get(
  "/api/hotels/search",
  check(["lng", "lat"]).exists(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json(
          HotelResource.error(
            errors.array(),
            "You have supplied invalid data",
            400
          )
        );
    }
    return await new HotelSearchController().index(req, res);
  }
);

app.post("/api/hotels/:hotelId/bookings", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(
        HotelResource.error(
          errors.array(),
          "You have supplied invalid data",
          400
        )
      );
  }
  return await new HotelBookingController().store(req, res);
});

app.get(
  "/api/hotels/:hotelId/bookings",
  async (req: Request, res: Response) => {
    return await new HotelBookingController().index(req, res);
  }
);
