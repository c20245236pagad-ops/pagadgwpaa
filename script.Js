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


// querySelector
const heading = document.querySelector("h1");
console.log(heading);
const projectsHeading = document.querySelector("#projects h2");
console.log(projectsHeading);
const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);
const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

// Text Content
heading.textContent = "My Portfolio";
projectsHeading.textContent = "My Projects";
contactHeading.textContent = "Let's Connect";
servicesHeading.textContent = " Services";