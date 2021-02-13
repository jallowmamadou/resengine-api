"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = void 0;
var typedi_1 = require("typedi");
var axios_1 = require("axios");
var HttpService = /** @class */ (function () {
    function HttpService() {
        if (!this.client) {
            this.client = axios_1.default.create({
                timeout: 1000,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
        }
    }
    /**
     * Sets an axios instance.
     *
     * @param {AxiosInstance} client
     * @returns {this}
     */
    HttpService.prototype.setClient = function (client) {
        this.client = client;
        return this;
    };
    /**
     * Gets axios instance.
     *
     * @returns {AxiosInstance}
     */
    HttpService.prototype.getInstance = function () {
        return this.client;
    };
    HttpService = __decorate([
        typedi_1.Service(),
        __metadata("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http-service.js.map