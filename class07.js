//   Objects in JavaScript
// - Creating and Modifying Objects
// - this Keyword
// - Prototypes and Inheritance
// - dot notation and bracket notation
// - Object Destructuring

// What is an object?
// - An object is a collection of properties and methods.

// example
let person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, " + this.name + "!");
    },
};
person.greet();

// this keyword
// - The this keyword refers to the object that the function is being called on.

// Modifying an Object
person.name = "Jane";
person.age = 25;
person.greet();

// Prototypes and Inheritance
// - Prototypes are properties that are inherited by objects.
// - Inheritance is the ability of one object to inherit the properties and methods of another object.

// example
let person3 = {
    name: "John",
    age: 30,
};
let person4 = Object.create(person3);
person4.name = "Jane";
person4.age = 25;
console.log(person4);

// dot notation VS bracket notation
const person5 = {
    ["person name"]: "John",
    age: 30,
};
person5["person name"];

// Object Destructuring
let person6 = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
    },
};
// First Way
let name = person6.name;
let age = person6.age;
let street = person6.address.street;
let city = person6.address.city;
let state = person6.address.state;
// Second Way
let {
    name: name2,
    age: age2,
    address: { street: street2, city: city2, state: state2 },
} = person6;

// Object Clone
const clonedPerson = { ...person };
console.log(clonedPerson);
//
// Object keys
const keys = Object.keys(person);
console.log(keys);
//
// Object values
const values = Object.values(person);
console.log(values);
//
// Object entries
const entries = Object.entries(person);
console.log(entries);

// looping in objects
//
// 1. for in
for (const key in person) {
    console.log(key, person[key]);
}
//
// 2. for of
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}

// 3. forEach
Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
});
//
// 4. Object.keys
Object.keys(person).forEach((key) => {
    console.log(key, person[key]);
});

// 5. Object.values
Object.values(person).forEach((value) => {
    console.log(value);
});

// Delete Property
delete person.age;
console.log(person);

// add variable as a value
let name = "John";
let age = 30;
let user = {
    name: name,
    age: age,
};
// add variable value as a key
let key1 = "name";
let key2 = "age";
let user = {
    [key1]: name,
    [key2]: age,
};

// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 01 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// JavaScript Object Manipulation Tasks

// 1. Creating and Modifying an Object
// Task: Build a user profile system
// Create an object 'user' with properties for name, age, and email
// Then, add a method to update the user's age
// Finally, add a new property 'location' to the object

// 2. Object Destructuring
// Task: Implement a weather data parser
// Given a 'weatherData' object with properties like temperature, humidity, and windSpeed,
// use object destructuring to extract these values into individual variables
// Then, create a function that takes this object and returns a formatted weather report

// 3. Looping Through Object Properties
// Task: Create a simple inventory counter
// Given an object where keys are item names and values are quantities,
// implement a function that logs each item and its quantity
// Then, calculate and return the total number of items

// 4. Nested Objects
// Task: Design a library catalog system
// Create an object 'library' with nested objects for different book categories
// Each book should have properties like title, author, and publishYear
// Implement a function to add a new book to a specific category

// 5. Object Methods
// Task: Develop a basic calculator object
// Create an object 'calculator' with methods for add, subtract, multiply, and divide
// Each method should take two parameters and return the result
// Add a method to calculate the percentage of one number relative to another

// 6. Combining Arrays and Objects
// Task: Build a student grade tracker
// Create an array of student objects, each containing properties for name and grades
// Implement a function to calculate and add the average grade to each student object
// Then, create a function to find the student with the highest average grade

// 7. Object.keys(), Object.values(), and Object.entries()
// Task: Analyze sales data
// Given an object where keys are product names and values are the number sold,
// use Object methods to:
// a) List all product names
// b) Calculate the total number of items sold
// c) Find the product with the highest sales

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>> Task 02 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// JavaScript Object Mastery Tasks

// 1. Creating and Modifying an Object
// Task: Online Shopping Cart
// Create an object 'shoppingCart' with properties for items, totalPrice, and userID
// Add a method to add items to the cart, updating the totalPrice
// Implement a method to remove items from the cart

// 2. Object Destructuring
// Task: Restaurant Menu Parser
// Given a 'menuItem' object with properties like name, price, ingredients, and nutritionInfo,
// use object destructuring to extract these values
// Create a function that takes this object and returns a formatted menu item description

// 3. Looping Through Object Properties
// Task: Social Media Post Analyzer
// Create an object representing a social media post with properties like likes, shares, comments
// Implement a function that loops through the object and calculates an "engagement score"
// based on the values of these properties

// 4. Nested Objects
// Task: Company Directory System
// Create a nested object structure to represent a company's departments and employees
// Implement a function to add a new employee to a specific department
// Create another function to move an employee from one department to another

// 5. Object Methods
// Task: Personal Finance Tracker
// Develop an object 'financeTracker' with methods to add income, add expenses, and calculate balance
// Include a method to generate a summary of transactions
// Add a method to set and track a savings goal

// 6. Combining Arrays and Objects
// Task: Playlist Manager
// Create an array of song objects, each containing properties like title, artist, and duration
// Implement functions to:
// a) Add a new song to the playlist
// b) Remove a song from the playlist
// c) Calculate the total duration of the playlist
// d) Find all songs by a specific artist

// 7. Object.keys(), Object.values(), and Object.entries()
// Task: Inventory Management System
// Given an object where keys are product IDs and values are objects containing product details,
// use Object methods to:
// a) List all product IDs
// b) Find the product with the lowest stock
// c) Calculate the total value of the inventory
// d) Create a report of products that need restocking (e.g., stock below a certain threshold)
