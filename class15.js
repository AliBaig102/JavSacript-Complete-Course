// ## 16. JSON in JavaScript
// - JSON Syntax
// - Parsing JSON
// - Stringifying Objects


// What is JSON?
// - JSON is a syntax for storing and exchanging data.
// - JSON is a text format that is used to store and transmit data.

// Example
let person = {
    name: "John",
    age: 30
};
let personJSON = JSON.stringify(person); // Convert an object to a JSON string
console.log(personJSON);

// What is parsing JSON?
// - Parsing JSON is the process of converting a JSON string into a JavaScript object.

// Example
let personJSON = '{"name": "John", "age": 30}';
let person = JSON.parse(personJSON); // Convert a JSON string to an object
console.log(person);


//   AJAX and Fetch API
// - XMLHttpRequest (XHR)
// - Fetch API
// - Making GET and POST Requests
// - Handling Responses

// What is AJAX?
// - AJAX is a technique for creating interactive web applications that can send and receive data asynchronously.

// Example
let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json");
xhr.onload = function() {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();

// What is Fetch API?
// - Fetch API is a built-in JavaScript function that allows you to make HTTP requests.

// Example
fetch("data.json")
    .then(response => response.json())
    .then(data => console.log(data));

// What is making GET and POST requests?
// - GET requests are used to retrieve data from a server.
// - POST requests are used to send data to a server.

// Example
fetch("data.json", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "John",
        age: 30
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

// Post Request
let xhr = new XMLHttpRequest();
xhr.open("POST", "data.json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function() {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send(JSON.stringify({
    name: "John",
    age: 30
}));


