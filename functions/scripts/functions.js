// Task 1

function greet(name) {
    console.log(`Hello and welcome ${name}!`);
};

greet("Rob");

// Task 2 & 3

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
};

let combinedName = fullName("Rob", "Bailiff");
console.log(combinedName);

// Task 4

let temperature = 15;

if (temperature < 0) {
    console.log("Stay inside!");
} else if (temperature > 10 && temperature < 20){
    console.log("Wear a REALLY big coat and a hat!");
} else if (temperature < 30) {
    console.log("Wear a coat and a hat!");
} else if (temperature < 50) {
    console.log("Put on a coat!");
} else {
    console.log("Just pants and a vest is fine.");
}