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
let greet2 = function () {
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
let doubled = arr.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// example 2
const callBackFunction = (a, b, c) => {
    let add = a + b;
    c(add);
};
function print(val) {
    document.write(val);
}
callBackFunction(10, 20, print);

// Immediately Invoked Function Expressions (IIFE)
// IIFE is a function that runs as soon as it is defined.
(function () {
    console.log("Hello, World!");
})();

// Function Scope and Closures
// - A closure is a function that has access to its outer scope, even after the outer function has finished executing.

// example
function makeAdder(x) {
    return function (y) {
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

// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 01 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// JavaScript Function Practice Tasks

// 1. Function Declaration
// Task: Create a weather reporting system
// Write a function declaration named 'reportWeather' that takes temperature as an argument
// and reports if it's "Hot", "Moderate", or "Cold"

// 2. Function Expression
// Task: Design a currency converter
// Create a function expression named 'convertCurrency' that converts USD to PKR

// 3. Function with Parameters and Arguments
// Task: Build a simple calculator
// Write a function 'calculate' that takes three parameters: two numbers and an operation
// It should perform the operation on the numbers and return the result

// 4. Parameter with Default Value
// Task: Implement a greeting function
// Create a function 'greet' that takes a name parameter with a default value of "Guest"
// It should return a greeting message

// 5. Function with Rest Parameter
// Task: Develop a shopping cart total calculator
// Write a function 'calculateTotal' that uses rest parameter to accept any number of prices
// It should return the sum of all prices

// 6. Function with Return Statement
// Task: Create a age verification system for a website
// Implement a function 'verifyAge' that takes age as an argument
// It should return true if age is 18 or above, and false otherwise

// 7. Arrow Functions
// Task: Develop a text formatter for a messaging app
// Write an arrow function 'formatMessage' that takes a string and returns it in uppercase

// 8. Closures
// Task: Create a private counter for a game score system
// Implement a function 'createScoreKeeper' that returns functions to increase, decrease, and get the score
// The score should not be directly accessible from outside the function

// >>>>>>>>>>>>>>>>>>>>>> Task 02 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// JavaScript Function Practice Tasks

// 1. Function Declaration
// Task: Create a weather reporting system
// Write a function declaration named 'reportWeather' that takes temperature as an argument
// and reports if it's "Hot", "Moderate", or "Cold"

// 2. Function Expression
// Task: Design a currency converter
// Create a function expression named 'convertCurrency' that converts USD to EUR

// 3. Function with Parameters and Arguments
// Task: Build a simple calculator
// Write a function 'calculate' that takes three parameters: two numbers and an operation
// It should perform the operation on the numbers and return the result

// 4. Parameter with Default Value
// Task: Implement a greeting function
// Create a function 'greet' that takes a name parameter with a default value of "Guest"
// It should return a greeting message

// 5. Function with Rest Parameter
// Task: Develop a shopping cart total calculator
// Write a function 'calculateTotal' that uses rest parameter to accept any number of prices
// It should return the sum of all prices

// 6. Function with Return Statement
// Task: Create a age verification system for a website
// Implement a function 'verifyAge' that takes age as an argument
// It should return true if age is 18 or above, and false otherwise

// 7. Arrow Functions
// Task: Develop a text formatter for a messaging app
// Write an arrow function 'formatMessage' that takes a string and returns it in uppercase

// 8. Closures
// Task: Create a private counter for a game score system
// Implement a function 'createScoreKeeper' that returns functions to increase, decrease, and get the score
// The score should not be directly accessible from outside the function


// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 03 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// JavaScript Function Mastery Tasks

// 1. Function Declaration
// Task: Implement a simple spell checker
// Create a function 'spellCheck' that takes a sentence and an array of correct words
// It should return an array of misspelled words

// 2. Function Expression
// Task: Design a workout plan generator
// Write a function expression 'createWorkoutPlan' that takes fitness level and available time
// It should return an object with workout details

// 3. Function with Parameters and Arguments
// Task: Build a recipe ingredient adjuster
// Implement a function 'adjustRecipe' that takes a recipe object, desired serving size,
// and original serving size as parameters. It should return the adjusted recipe

// 4. Parameter with Default Value
// Task: Create a social media post formatter
// Write a function 'formatPost' with parameters for content and platform (default to 'Twitter')
// It should format the post according to platform-specific rules

// 5. Function with Rest Parameter
// Task: Implement a team performance analyzer
// Create a function 'analyzeTeamPerformance' that takes a team name followed by
// an unlimited number of game scores. It should return performance statistics

// 6. Function with Return Statement
// Task: Develop a password generator
// Write a function 'generatePassword' that takes desired length and complexity
// It should return a randomly generated password meeting the specified criteria

// 7. Arrow Functions
// Task: Create a data summarizer for a dashboard
// Implement an arrow function 'summarizeData' that takes an array of data points
// and returns an object with summary statistics (mean, median, mode, etc.)

// 8. Closures
// Task: Create a caching system for expensive computations
// Implement a function 'createCache' that returns a function to perform computations
// The returned function should cache results for previously seen inputs

