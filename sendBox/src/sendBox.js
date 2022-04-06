"use strict";
exports.__esModule = true;
var Invoice_js_1 = require("./classes/Invoice.js");
var Payment_js_1 = require("./classes/Payment.js");
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toform = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var docs;
    if (type.value === 'Invoice')
        docs = new Invoice_js_1.Invoice(toform.value, details.value, amount.valueAsNumber);
    else
        docs = new Payment_js_1.Payment(toform.value, details.value, amount.valueAsNumber);
    console.log(docs);
});
