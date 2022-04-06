import { HasFormatter } from '../interfaces/hasForamatter.js'

export class Invoice implements HasFormatter {
    readonly client:string;
    public details: string;
    public amount: number;

    constructor(c:string, d:string, a:number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
