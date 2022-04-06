"use strict";
export const __esModule = true;
import { Invoice } from "../src/classes/Invoice.js";
import { Payment } from "../src/classes/Payment.js";
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toform = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var docs;
    if (type.value === 'Invoice')
        docs = new Invoice(toform.value, details.value, amount.valueAsNumber);
    else
        docs = new Payment(toform.value, details.value, amount.valueAsNumber);
    console.log(docs);
});
