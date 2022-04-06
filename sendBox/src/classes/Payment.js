"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(c, d, a) {
        this.recepiant = c;
        this.details = d;
        this.amount = a;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recepiant, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
exports.Payment = Payment;
