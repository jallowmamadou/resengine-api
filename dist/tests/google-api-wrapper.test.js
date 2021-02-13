"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var axios_mock_adapter_1 = require("axios-mock-adapter");
var chai_1 = require("chai");
var google_place_api_wrapper_1 = require("../src/services/google-place-api-wrapper");
var http_service_1 = require("../src/services/http-service");
var near_by_search_success_response_1 = require("./near-by-search-success-response");
var place_details_data_1 = require("./place-details-data");
describe("Google api wrapper test", function () {
    it("should search for near by hotels by cordinates", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mock, places, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mock = new axios_mock_adapter_1.default(axios_1.default);
                    mock
                        .onGet("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
                        body: {
                            params: {
                                type: "lodging",
                                location: "48.19851972979718,11.512284425816313",
                                key: "AIzaSyBHyNTKlM4rKt1uvVcs8-f7CQrgYNbqHmU",
                                radius: 1500,
                            },
                        },
                    })
                        .reply(200, near_by_search_success_response_1.SuccessResponse);
                    places = new google_place_api_wrapper_1.GooglePlaceApiWrapper(new http_service_1.HttpService().setClient(axios_1.default));
                    return [4 /*yield*/, places.findPlace(48.19851972979718, 11.512284425816313)];
                case 1:
                    response = _a.sent();
                    chai_1.expect(response).to.have.property("html_attributions");
                    chai_1.expect(response).to.have.property("results");
                    chai_1.expect(response.status).to.equal("OK");
                    chai_1.expect(response.results).length.to.be.gte(2);
                    mock.reset();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should find a place by place id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mock, place;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mock = new axios_mock_adapter_1.default(axios_1.default);
                    mock
                        .onGet("https://maps.googleapis.com/maps/api/place/details/json", {
                        body: {
                            params: {
                                place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
                                key: "AIzaSyBHyNTKlM4rKt1uvVcs8-f7CQrgYNbqHmU",
                            },
                        },
                    })
                        .reply(200, place_details_data_1.PlaceDetails);
                    return [4 /*yield*/, new google_place_api_wrapper_1.GooglePlaceApiWrapper(new http_service_1.HttpService().setClient(axios_1.default)).getPlaceById("ChIJc6b2lhR3nkcRLI0oHtrK8Yw")];
                case 1:
                    place = _a.sent();
                    chai_1.expect(place).to.have.property("html_attributions");
                    chai_1.expect(place).to.have.property("result");
                    chai_1.expect(place.status).to.equal("OK");
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=google-api-wrapper.test.js.map