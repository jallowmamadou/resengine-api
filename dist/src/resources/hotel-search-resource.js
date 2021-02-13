"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HotelSearchResource = /** @class */ (function () {
    function HotelSearchResource() {
    }
    HotelSearchResource.prototype.parseCollection = function (resource, meta, links) {
        if (meta === void 0) { meta = {}; }
        if (links === void 0) { links = {}; }
        return {
            data: resource.map(function (item) {
                return {
                    id: item.id,
                    hotelId: item.hotelId,
                    mainGuestName: item.mainGuestName,
                    mainGuestEmail: item.mainGuestEmail,
                    status: item.status,
                    bookingCode: item.bookingCode,
                    arrivalDate: item.arrivalDate,
                    departureDate: item.departureDate,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                    deletedAt: item.deletedAt,
                };
            }),
            meta: meta,
            links: links,
        };
    };
    HotelSearchResource.prototype.parseError = function (error) {
        return {
            message: error.message,
            statusCode: 500,
        };
    };
    HotelSearchResource.prototype.parseJson = function (resource) {
        return {
            data: {},
            meta: {
                next_page_id: "",
            },
            links: {
                self: "",
            },
        };
    };
    return HotelSearchResource;
}());
//# sourceMappingURL=hotel-search-resource.js.map