import { Hasformatter } from '../interfaces/Hasformatter.js'

export class Invoice implements Hasformatter {
    // readonly client: string;
    // private details: string;
    // publicamount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`
    }
}