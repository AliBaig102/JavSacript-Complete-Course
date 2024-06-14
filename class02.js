// Variables in JavaScript
// var, let, and const
// Variable Naming Conventions
// Data Types in JavaScript

// What is a variable?
// - A variable is a container for storing data values.

// variable declaration
// variable initialization
// variable declaration and initialization

//what are the ways to create variables

// 1. var
// 2. let
// 3. const

// variable declaration
var abc ;
// variable initialization
var abc = 10;

// variable declaration and initialization
var abc = 10;

// 1. var
// var is to be used when we want to change the value of variable
// Example:
var variableVar = 10;
variableVar = 20; // Change the value of variable variableVar to 20

// 2. let
// let is to be used when we want to change the value of variable
// Example:
let variableLet = 10;
variableLet = 20; // Change the value of variable variableLet to 20

// 3. const
// const is to be used when we do not want to change the value of variable
// Example:
const variableConst = 10;
// variableConst = 20;  we can not change value of a constant variable

// difference between var and let
// when we use var we can change the value of variable and also redeclare the variable
// example
// var a=10;
// var a=20;
// console.log(a);
// it will not give error

// when we use let we can change the value of variable but we can not redeclare the variable
// example
// let a=10;
// let a=20;
// console.log(a);
// it will give error

// Data Types in JavaScript
// a data type is a type of value that can be stored in a variable
// What are the data types in JavaScript?
// primitive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. BigInt
// 7. Symbol

// example
let a = "Hello";
let b = 10;
let c = true;
let d = null;
let e = undefined;
let f = 10n;
let g = Symbol("Hello");

// reference data types
// 1. Object
// 2. Array
// 3. Function

// example
let obj = {
    name: "John",
    age: 30
};
let arr = [1, 2, 3];
let func = function() {
    console.log("Hello");
};

// How to print data types in JavaScript?
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof obj);
// console.log(typeof arr);
// console.log(typeof func);