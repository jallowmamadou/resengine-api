export class AddBookingForm {
    private readonly _form;
    constructor(form) {
        this._form = form;
    }

    /**
     * Checks the form has a hotel id.
     *
     * @returns {any}
     */
    hasHotelId(){
        return this._form.hotelId
    }

    /**
     * Finds a field in the form.
     *
     * @param {string} field
     * @returns {any}
     */
    get(field: string) {
        return this._form[field];
    }
}
