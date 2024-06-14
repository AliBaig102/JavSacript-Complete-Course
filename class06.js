//   Functions in JavaScript
// - Function Declaration vs Expression
// - Function with Parameters and Arguments
// - Arrow Functions
// - Higher-Order Functions
// - Callback Functions
// - Immediately Invoked Function Expressions (IIFE)
// - Function Scope and Closures
// - Recursion
// - Scope and Hoisting

// What is a function?
// - A function is a block of code that performs a specific task.

// Function Declaration
function greet() {
    console.log("Hello, World!");
}

// Function Expression
let greet2 = function() {
    console.log("Hello, World!");
};

// Function Declaration vs Function Expression
// - Function Declaration is a statement that defines a function.
// - Function Expression is a value that represents a function.

// Function with Parameters and Arguments
function greet3(name) {
    console.log("Hello, " + name + "!");
}
greet3("John");

// parameter with default value
function greet4(name = "World") {
    console.log("Hello, " + name + "!");
}
greet4("John");
greet4();

// Function with rest parameter
function greet5(name, ...args) {
    console.log("Hello, " + name + "!");
    console.log(args);
}
greet5("John", "apple", "banana", "orange");
// Function with Return Statement
function add(a, b) {
    return a + b;
}
let result = add(5, 10);
console.log(result);
// Arrow Functions
let greet6 = () => {
    console.log("Hello, World!");
};
greet6();

// Higher-Order Functions
// - A higher-order function is a function that takes another function as an argument or returns a function.

// example
let add = (a, b) => a + b;
console.log(add(5, 10)); // 15


// Callback Functions
// - A callback function is a function that is passed as an argument to another function.

// example 1
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// example 2
const callBackFunction = (a,b,c)=>{
    let add = a+b;
    c(add);
}
function print(val){
    document.write(val);
}
callBackFunction(10,20,print);

// Immediately Invoked Function Expressions (IIFE)
// IIFE is a function that runs as soon as it is defined.
(function() {
    console.log("Hello, World!");
})();

// Function Scope and Closures
// - A closure is a function that has access to its outer scope, even after the outer function has finished executing.

// example
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}
let add5 = makeAdder(5);
console.log(add5(10)); // 15


// Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let result2 = factorial(5);
console.log(result2); // 120
