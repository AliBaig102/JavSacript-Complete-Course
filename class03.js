// ## 4. Operators in JavaScript
// - Arithmetic Operators
// - Assignment Operators
// - Comparison Operators
// - Logical Operators
// - String Operators
// - Ternary Operator
// - Type Operators

//Arithmetic Operators
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Modulus
// 6. Increment
// 7. Decrement

//Example

let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a++); // 10
console.log(a--); // 11

// Assignment Operators
// 1. Addition Assignment
// 2. Subtraction Assignment
// 3. Multiplication Assignment
// 4. Division Assignment
// 5. Modulus Assignment
// 6. Exponentiation Assignment

//Example
let c = 10;
c += 5; // c = c + 5
console.log(c); // 15
c -= 5; // c = c - 5
console.log(c); // 10
c *= 5; // c = c * 5
console.log(c); // 50
c /= 5; // c = c / 5
console.log(c); // 10
c %= 5; // c = c % 5
console.log(c); // 0
c **= 5; // c = c ** 5
console.log(c); // 0


// Comparison Operators
// 1. Equal to
// 2. Not equal to
// 3. Greater than
// 4. Less than
// 5. Greater than or equal to
// 6. Less than or equal to
// 7. Strictly equal to
// 8. Strictly not equal to

//Example
let d = 10;
let e = 5;
console.log(d == e); // false
console.log(d != e); // true
console.log(d > e); // true
console.log(d < e); // false
console.log(d >= e); // true
console.log(d <= e); // false
console.log(d === e); // false
console.log(d !== e); // true


// Logical Operators
// 1. Logical AND
// 2. Logical OR
// 3. Logical NOT

//Example
let f = 10;
let g = 5;
console.log(f > 5 && g > 5); // true
console.log(f > 5 || g > 5); // true
console.log(!(f > 5 && g > 5)); // false


// String Operators
// 1. Concatenation
// 2. Repeat

//Example
let j = "Hello";
let k = "World";
console.log(j + " " + k); // Hello World
console.log(j.repeat(5)); // HelloHelloHelloHelloHello

// Ternary Operator
// 1. Conditional Expression

//Example
let l = 10;
let m = 5;
let n = l > m ? "L is greater" : "M is greater";
console.log(n);

// Type Operators
// 1. typeof
// 2. instanceof

//Example
let o = 10;
console.log(typeof o); // number
console.log(o instanceof String); // false