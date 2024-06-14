//   Error Handling in JavaScript
// - try, catch, finally
// - throw Statement
// - Custom Errors

// What is Error Handling?
// - Error Handling is a process of handling errors in JavaScript.

// try, catch, finally
// - try: The try block lets you define a block of code to be tested for errors.
// - catch: The catch block lets you handle the error.
// - finally: The finally block lets you execute code, after try and catch, regardless of the result.

// Example

try {
    let x = 10;
    let y = 0;
    let z = x / y;
    console.log(z);
} catch (error) {
    console.log(error);
} finally {
    console.log("Finally block is always executed.");
}

// throw Statement
// - The throw statement throws an error and stops the execution of the current function.

// Example
function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return x / y;
}
try {
    let result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log(error);
}

// Custom Errors
// - Custom errors are user-defined errors.

