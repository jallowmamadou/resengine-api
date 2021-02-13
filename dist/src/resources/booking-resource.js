"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingResource = void 0;
var json_resource_1 = require("./json-resource");
var BookingResource = /** @class */ (function (_super) {
    __extends(BookingResource, _super);
    function BookingResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Collection of a resource.
     *
     * @param {BookingType[]} resource
     * @param {{}} meta
     * @param {{}} links
     * @returns {SuccessResponseType}
     */
    BookingResource.collection = function (resource, meta, links) {
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
    return BookingResource;
}(json_resource_1.JsonResource));
exports.BookingResource = BookingResource;
//# sourceMappingURL=booking-resource.js.map