//   Classes in JavaScript
// - Class Syntax
// - Constructors
// - Inheritance
// - Static Methods
// - Private and Public Fields

// What is a class?
// - A class is a blueprint for creating objects.
// - A class is a collection of properties and methods that defines a particular type of object.


// Syntax
// class ClassNmae{
//  properties

//  methods
// }
// Example
class Person {
   name="John";
   age=30;
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person();
person1.greet();

//What is a constructor?
// - A constructor is a special method in a class that is used to initialize the objects of a class.

// Example
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person2 = new Person2("John", 30);
person2.greet();

// What is inheritance?
// - Inheritance is the process of creating a new class from an existing class.

// Example

class Vehicle {
    numWheels = 4;
    isLightOn = false;
    isEngineOn = false;
    color = "red";
    startEngine() {
        this.isEngineOn = true;
    }
    stopEngine() {
        this.isEngineOn = false;
    }
}
let myVehicle = new Vehicle();

class Car extends Vehicle {
    numDoors = 4;
    startEngine() {
        super.startEngine();
        console.log("Vroom, vroom!");
    }
}
let myCar = new Car();

class Truck extends Vehicle {
    numWheels = 6;
    startEngine() {
        super.startEngine();
        console.log("Vroom, vroom, vroom!");
    }
}
let myTruck = new Truck();

class Motorcycle extends Vehicle {
    numWheels = 2;
    color = "blue";
    numCylinders = 2;
    numGears = 5;
    currentGear = 1;
    incrementGear() {
        if (this.currentGear < this.numGears) {
            this.currentGear++;
        }
    }
    decrementGear() {
        if (this.currentGear > 1) {
            this.currentGear--;
        }
    }

    startEngine() {
        super.startEngine();
        console.log("Vroom, vroom, vroom, vroom!");
    }
    stopEngine() {
        super.stopEngine();
        console.log("Vroom, vroom, vroom, vroom, vroom!");
    }
}
let myMotorcycle = new Motorcycle();

// What is static methods?
// - Static methods are methods that are not associated with any specific object or class.

// Example
class Calculator {
    static add(x, y) {
        return x + y;
    }
}
let result = Calculator.add(5, 10);
console.log(result);

// What is private and public fields?
// - Private fields are fields that are only accessible within the class.
// - Public fields are fields that are accessible from outside the class.

// Example
class Person3 {
    #name = "John";
    #age = 30;
    greet() {
        console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
    }
}
let person3 = new Person3();
person3.greet();
person3.age = 31; // Error: Cannot assign to '#age' because it is a private field
