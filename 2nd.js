/* // this is comment next line print hello world
console.log("Single line comment example");


This is a multi-line comment example.

console.log("Multi-line comment example");



//  arithematic operators
let a = 10;
let b = 5;
let sum = a + b;
console.log("Sum: " ,sum);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b);
console.log("Modulus: ", a % b);


let cond1 = a > b;
let cond2 = (a - b) == 6;

console.log("cond1 && cond2 ", cond1 && cond2);
console.log("cond1 || cond2 ", cond1 || cond2);
console.log("!cond2 ", !cond2);
// Assignment operators



let x = 12; 
let y = 10;
console.log("x == y: ", x == y); // true, value is equal
console.log("x === y: ", x === y); // false, value and type are not equal


age=18;
console.log("Age is: " + age);
if (age >= 18) {
    console.log("You are eligible to vote.");
}else {
    console.log("You are not eligible to vote.");
}*/


let mode = "dark"; // or "light"
let color;
if(mode==="dark"){
    color="black";
    console.log("Dark mode is enabled.");
}
if(mode==="light"){
    color="white";
    console.log("Light mode is enabled.");
}
console.log("The background color is: " + color);



// Ternary operator example
let isLoggedIn = false;  
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);



// odd even number check
let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is: " + result);



// ladder if example
let mode2 = "dark"; // or "light"
if (mode2 === "dark") {
    console.log("Dark mode is enabled.");
}else if (mode2 === "light") {
    console.log("Light mode is enabled.");
}else if (mode2 === "blue") {
    console.log("Blue mode is enabled.");
}
else {
    console.log("No mode is enabled.");
}

if (mode2 === "dark") console.log("Dark mode is enabled.");

age=15;
let message2=(age>=18) ? "you can vote" : "you cannot vote";
console.log(message2);