"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBookingForm = void 0;
var AddBookingForm = /** @class */ (function () {
    function AddBookingForm(form) {
        this._form = form;
    }
    /**
     * Checks the form has a hotel id.
     *
     * @returns {any}
     */
    AddBookingForm.prototype.hasHotelId = function () {
        return this._form.hotelId;
    };
    /**
     * Finds a field in the form.
     *
     * @param {string} field
     * @returns {any}
     */
    AddBookingForm.prototype.get = function (field) {
        return this._form[field];
    };
    return AddBookingForm;
}());
exports.AddBookingForm = AddBookingForm;
//# sourceMappingURL=add-booking-form.js.map