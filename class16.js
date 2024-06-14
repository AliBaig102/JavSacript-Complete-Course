// ## 18. Web Storage API
// - localStorage
// - sessionStorage


// What is Web Storage API?
// - Web Storage API is a web API that allows you to store data in the browser.

// localStorage
// - localStorage is a web storage API that allows you to store data in the browser.

// sessionStorage
// - sessionStorage is a web storage API that allows you to store data in the browser.

// Difference between localStorage and sessionStorage
// - localStorage saves data in the entire browser
// - sessionStorage saves data in the current tab or window

// localStorage
// localStorage.setItem(key, value);
// localStorage.getItem(key);
// localStorage.removeItem(key);
// localStorage.clear();

// sessionStorage
// sessionStorage.setItem(key, value);
// sessionStorage.getItem(key);
// sessionStorage.removeItem(key);
// sessionStorage.clear();


//## 19. Date and Time in JavaScript
// - Date Object
// - Formatting Dates and Times
// - Date Methods

// Date Object
// - Date object is a built-in object that allows you to work with dates and times.

// Date Methods
// - Date methods are functions that allow you to work with dates and times.

// Example
let d = new Date();
console.log(d);

// Date Methods
// - getFullYear()
// - getMonth()
// - getDay()
// - getHours()
// - getMinutes()
// - getSeconds()
// - getMilliseconds()
// - getTime()
// - getDate()
// - getDay()

// Formatting Dates and Times
// - Date object methods allow you to format dates and times.

// Example
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDay();
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
let millisecond = d.getMilliseconds();
let time = d.getTime();
let date = d.getDate();
let day = d.getDay();

//   Timers in JavaScript
// - setTimeout
// - setInterval
// - clearTimeout and clearInterval

// setTimeout
// - setTimeout is a function that allows you to execute a function after a specified time.

// Example
setTimeout(() => {
    console.log("Hello, World!");
}, 2000);


// setInterval
// - setInterval is a function that allows you to execute a function repeatedly after a specified time.

// Example
setInterval(() => {
    console.log("Hello, World!");
}, 2000);


// clearTimeout
// - clearTimeout is a function that allows you to clear a timeout.

// Example
let t = setTimeout(() => {
    console.log("Hello, World!");
}, 2000);
clearTimeout(t);


// clearInterval
// - clearInterval is a function that allows you to clear an interval.

// Example
let i = setInterval(() => {
    console.log("Hello, World!");
}, 2000);
clearInterval(i);
