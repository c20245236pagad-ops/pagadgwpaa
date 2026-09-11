console.log("Hello, world.");
console.log("First JavaScript");

const myName = "Ronalyn D. Pagad";
const myNumber = 9957257621;
const myAddress = "Brgy. Nanca, E.B. Magalona";

let age = 20;

console.log("Name: " + myName);
console.log("Age: " + age);
console.log("Number: " + myNumber);
console.log("Address: " + myAddress);

// Functions
function greet(name) {
    return `Good morning, ${name}`;
}
console.log(greet("Ronalyn"));

//
function mdas(num1,num2) {
    let mul = num1 * num2;
    let div = num1 / num2;
    let add = num1 + num2;
    let sub = num1 - num2;
    return (`Values: ${num1} and ${num2}, Product ${m}, Quotient: ${d}, diff: ${s}` );
}
console.log(mdas(5, 3));