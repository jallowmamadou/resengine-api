# Resengine

Reservation engine is a restful api for searching for locations near a coordination (longitude and latitute).
You make a booking base on a hotel id. You can also view all the bookings form specific hotel.
---

## Environment variables:

**!! Environment Variables !!**

-   [required] **PORT** (default: 3000) int;
-   [required] **GOOGLE_API_KEY** string;
-   [required] **MYSQL_DB_HOST**  string;
-   [required] **MYSQL_DB_USER** string;
-   [required] **MYSQL_DB_PASSWORD** string;
-   [optional] **MYSQL_DB_PORT**;


## Local:
**!! Steps to run on development !!**
- npm run dev


## Test:
**!! Steps to run tests !!**
- npm run test-dev

## Production:
**!! Production endpoints !!**
- (GET) /api/hotels/search
    ** search for hotels near a gives coordinate system.
  
- (POST) /api/hotels/{hotelId}/bookings
  ** add a booking to a hotel
  
- (GET) /api/hotels/{hotelId}/bookings
  ** find bookings associated with a hotel
  
## API Definitions:
**!! location of api definations !!**
[link api definations]: https://app.swaggerhub.com/apis-docs/jallowmamadou/resengine/1.0.0

