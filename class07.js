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
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }
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
    age: 30
};
let person4 = Object.create(person3);
person4.name = "Jane";
person4.age = 25;
console.log(person4);

// dot notation VS bracket notation
const person5 = {
    ['person name']: "John",
    age: 30
}
person5["person name"];

// Object Destructuring
let person6 = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}
// First Way
let name = person6.name;
let age = person6.age;
let street = person6.address.street;
let city = person6.address.city;
let state = person6.address.state;
// Second Way
let { name: name2, age: age2, address: { street: street2, city: city2, state: state2 } } = person6

// Object Clone
const clonedPerson = { ...person };
console.log(clonedPerson)
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
Object.keys(person).forEach(key => {
    console.log(key, person[key]);
});

// 5. Object.values
Object.values(person).forEach(value => {
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
    age: age
}
// add variable value as a key
let key1 = "name";
let key2 = "age";
let user = {
    [key1]: name,
    [key2]: age
}
