let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;

isLoggedIn = true;

//arrays
let ninjas: string[] = [];

ninjas.push('shaun');


//union types
let mixed: (string|number|boolean)[] = [];

mixed.push(false);
mixed.push(20);
mixed.push('hello');
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

//objects

let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
     beltColor: string
};
ninjaTwo = {
    name: 'Mario',
    age: 20,
    beltColor: 'black'
}