//   Asynchronous JavaScript
// - Callbacks
// - Promises
// - Async/Await
// - Error Handling in Asynchronous Code


// What is Asynchronous JavaScript?
// - Asynchronous JavaScript is a programming paradigm that allows JavaScript to execute multiple tasks
//   simultaneously, while still allowing the browser to continue rendering the page.

// Callbacks
// - A callback is a function that is passed as an argument to another function.

// promise
// - A promise is an object that represents the eventual completion or failure of an asynchronous operation.

// How to Create a Promise
// - A promise is created by calling the Promise constructor function.
// - The Promise constructor function takes a callback function as an argument.

// Example
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 1000);
});

// Promise State
// - The Promise object has a state that can be one of the following:
//   - pending - default
//   - fulfilled - when the Promise is resolved
//   - rejected - when the Promise is rejected

// How to Resolve a Promise
// - When a Promise is resolved, the Promise object's state becomes fulfilled.
// - When a Promise is rejected, the Promise object's state becomes rejected.

// Example
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally...");
    })


// Async/Await
// - The async keyword is used to declare an asynchronous function.
// - The await keyword is used to wait for the Promise to resolve.

// Example
async function hello() {
    return await promise;
}

hello()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally...");
    })