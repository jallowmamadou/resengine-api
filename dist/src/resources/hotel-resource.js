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
exports.HotelResource = void 0;
var json_resource_1 = require("./json-resource");
var HotelResource = /** @class */ (function (_super) {
    __extends(HotelResource, _super);
    function HotelResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Collection of a resource.
     *
     * @param places
     * @param {{}} meta
     * @param {{}} links
     * @returns {SuccessResponseType}
     */
    HotelResource.collection = function (places, meta, links) {
        if (meta === void 0) { meta = {}; }
        if (links === void 0) { links = {}; }
        return {
            data: places.map(function (place) {
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
            meta: meta,
            links: links,
        };
    };
    return HotelResource;
}(json_resource_1.JsonResource));
exports.HotelResource = HotelResource;
//# sourceMappingURL=hotel-resource.js.map