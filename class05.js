// Loops in JavaScript
// 1. while
// 2. do...while
// 3. for
// 4. forEach
// 5. for...in
// 6. for...of

// What is a loop?
// - A loop is a control structure that allows you to repeat a block of code an unknown number of times.

// While Loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do...While Loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// For Loop
for (let k = 0; k < 5; k++) {
    console.log(k);
}

// For Each Loop
let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
    console.log(element);
});

// For...in Loop
let obj = {
    name: "John",
    age: 30
};
for (let key in obj) {
    console.log(key, obj[key]);
}

// For...of Loop
let arr2 = [1, 2, 3, 4, 5];
for (let element of arr2) {
    console.log(element);
}

// break and continue
// What is break?
// - break is used to exit a loop.

for (let l = 0; l < 5; l++) {
    if (l === 2) {
        break;
    }
    console.log(l);
}

// What is continue?
// - continue is used to skip the current iteration of a loop.
for (let m = 0; m < 5; m++) {
    if (m === 2) {
        continue;
    }
    console.log(m);
}

//Template Strings (Template Literals)
// - Template literals are a way of embedding variables and expressions inside strings.
let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);


// >>>>>>>>>>>>>>>>>>>>>>>>>>> Task 01 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Task: JavaScript Loop Practice

// Scenario:
// You're creating a series of exercises to practice different types of loops
// and control statements in JavaScript.

// 1. For Loop:
// Create a program that prints the first 10 multiples of 7.

// 2. While Loop:
// Write a countdown timer that starts at 10 and ends at 0.

// 3. Do-While Loop:
// Create a simple number guessing game. The correct number is 42. 
// Keep asking the user for a guess until they get it right.

// 4. ForEach Loop:
// Given an array of numbers, use forEach to print each number doubled.

// 5. For...in Loop:
// Create an object representing a car with properties like make, model, and year.
// Use a for...in loop to print all the properties and their values.

// 6. For...of Loop:
// Given an array of fruits, use a for...of loop to print each fruit in uppercase.

// 7. Break Statement:
// Write a program that finds the first number divisible by both 3 and 7 
// between 1 and 100. Use a loop and the break statement.

// 8. Continue Statement:
// Print all numbers from 1 to 20, but skip multiples of 3. Use a loop 
// and the continue statement.
