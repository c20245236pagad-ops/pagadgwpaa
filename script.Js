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

const heading = document.querySelector("h1")

const contact = document.querySelector(".contact");
const services = document.querySelector(".services");

console.log(heading);
console.log(contact);
console.log(services);



// Functions
function greet(name) {
    return `Good morning, ${name}`;
}
console.log(greet("Ronalyn"));

//
function mdas(num1,num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;
    return (`Values: ${num1} and ${num2}. \nProduct ${m},\nQuotient: ${d}, \nsum: ${a} \ndiff: ${s} ` );
}
console.log(mdas(5, 3));
