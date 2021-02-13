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
exports.Booking = void 0;
var typeorm_1 = require("typeorm");
var booking_status_enum_1 = require("../enums/booking-status-enum");
var Booking = /** @class */ (function () {
    function Booking() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Booking.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar" }),
        __metadata("design:type", String)
    ], Booking.prototype, "bookingCode", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar" }),
        __metadata("design:type", String)
    ], Booking.prototype, "hotelId", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar" }),
        __metadata("design:type", String)
    ], Booking.prototype, "mainGuestEmail", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar" }),
        __metadata("design:type", String)
    ], Booking.prototype, "mainGuestName", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: booking_status_enum_1.BookingStatusEnum,
            default: booking_status_enum_1.BookingStatusEnum.Pending,
        }),
        __metadata("design:type", String)
    ], Booking.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ type: "timestamp" }),
        __metadata("design:type", String)
    ], Booking.prototype, "arrivalDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "timestamp", default: null }),
        __metadata("design:type", String)
    ], Booking.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Booking.prototype, "departureDate", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: "createdAt" }),
        __metadata("design:type", String)
    ], Booking.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updatedAt" }),
        __metadata("design:type", String)
    ], Booking.prototype, "updatedAt", void 0);
    Booking = __decorate([
        typeorm_1.Entity()
    ], Booking);
    return Booking;
}());
exports.Booking = Booking;
//# sourceMappingURL=Booking.js.map