// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// };

// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// };

// greetPerson(me);

// console.log(me);

import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { Hasformatter } from './interfaces/Hasformatter.js';

// let docOne: Hasformatter;
// let docTwo: Hasformatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'lumbing work', 200);

// let docs: Hasformatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('Mario', 'work on the mario website', 250);
// const invTwo = new Invoice('Luigi', 'work on the luigi website', 250);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client,  inv.amount, inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string,string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: Hasformatter;

    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    console.log(
        doc
    );

    list.render(doc, type.value, 'end');
})

// tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true]
tup[0] = 'ken';
tup[1] = 30;

// let student: [string, number];
// student = ['chun-li', 223423];



