import { HasFormatter } from "./interfaces/hasForamatter.js";
import { Invoice } from "./classes/Invoice.js";  
import { Payment } from "./classes/Payment.js";

const form = document.querySelector('.new-item-form')!;
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    let docs: HasFormatter;

    if (type.value === 'Invoice')
        docs = new Invoice(toform.value, details.value, amount.valueAsNumber);
    else
        docs = new Payment(toform.value, details.value, amount.valueAsNumber);

    console.log(docs);
})
