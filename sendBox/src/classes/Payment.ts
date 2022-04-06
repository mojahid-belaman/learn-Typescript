import { HasFormatter } from '../interfaces/hasForamatter.js'


export class Payment implements HasFormatter {
    readonly recepiant:string;
    public details: string;
    public amount: number;

    constructor(c:string, d:string, a:number) {
        this.recepiant = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.recepiant} owes ${this.amount} for ${this.details}`;
    }
}
