"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonResource = void 0;
var JsonResource = /** @class */ (function () {
    function JsonResource() {
    }
    /**
     * Collection of a resource.
     *
     * @param resource
     * @param {{}} meta
     * @param {{}} links
     * @returns {SuccessResponseType}
     */
    JsonResource.collection = function (resource, meta, links) {
        if (meta === void 0) { meta = {}; }
        if (links === void 0) { links = {}; }
        return {
            data: resource,
            meta: meta,
            links: links,
        };
    };
    /**
     * Collection of a resource.
     *
     * @param resource
     * @param {{}} meta
     * @param {{}} links
     * @returns {SuccessResponseType}
     */
    JsonResource.resource = function (resource, meta, links) {
        if (meta === void 0) { meta = {}; }
        if (links === void 0) { links = {}; }
        return {
            data: resource,
            meta: meta,
            links: links,
        };
    };
    /**
     * Parse an error response.
     *
     * @param {Error | {} | null} error
     * @param {string} humanReadable
     * @param {number} errorCode
     * @returns {ErrorResponseType}
     */
    JsonResource.error = function (error, humanReadable, errorCode) {
        if (humanReadable === void 0) { humanReadable = ""; }
        if (errorCode === void 0) { errorCode = 500; }
        return {
            errorMessage: "message" in error ? error.message : null,
            humanMessage: humanReadable,
            errorCode: errorCode,
        };
    };
    return JsonResource;
}());
exports.JsonResource = JsonResource;
//# sourceMappingURL=json-resource.js.map