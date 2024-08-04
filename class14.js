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
    name = "John";
    age = 30;
    greet() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old.`,
        );
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
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old.`,
        );
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
        console.log(
            `Hello, my name is ${this.#name} and I am ${this.#age} years old.`,
        );
    }
}
let person3 = new Person3();
person3.greet();
person3.age = 31; // Error: Cannot assign to '#age' because it is a private field

// >>>>>>>>>>>>>>>>>>>>>>> Task 01 <<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*
Task 1: Create the Book Class

Scenario:
You're building a management system for a bookstore. The first step is to create a class to represent individual books in the store's inventory.

Requirements:
1. Create a Book class with the following properties:
   - title (string)
   - author (string)
   - ISBN (string)
   - price (number)

2. Implement a constructor that initializes these properties.

3. Add the following methods:
   - getDiscountPrice(discountPercent): Returns the price after applying the given discount percentage.
   - displayInfo(): Returns a string with all the book's information.

4. Implement proper error handling for the constructor and methods.

Example Output:

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 15.99);
console.log(book.displayInfo());
// Output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 9780743273565, Price: $15.99"

console.log(book.getDiscountPrice(10));
// Output: 14.39
*/

// >>>>>>>>>>>>>>>>>>>>>>> Task 02 <<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*
Task: Develop a Weather Forecast Application

Scenario:
You're tasked with creating a JavaScript application for a local weather service. The application needs to manage weather data for different cities, provide forecast information, and alert users about severe weather conditions.

Requirements:
1. Create a WeatherData class to represent weather information for a specific day.
2. Implement a City class to manage weather data for a particular city over time.
3. Develop a WeatherService class to handle operations across multiple cities.
4. Implement a method to calculate average temperatures over a given period.
5. Create an alert system for extreme weather conditions.

Detailed Requirements:

1. WeatherData class:
   - Properties: date, temperature, humidity, windSpeed, conditions
   - Method: isExtremeWeather() to check if weather conditions are severe

2. City class:
   - Properties: name, location (latitude, longitude), weatherHistory (array of WeatherData objects)
   - Methods: addWeatherData(), getAverageTemperature(startDate, endDate)

3. WeatherService class:
   - Methods: addCity(), removeCity(), updateWeather(cityName, weatherData), getWeatherAlert()

Example Output:

const nyWeather = new WeatherData('2024-08-04', 28, 65, 10, 'Sunny');
const newYork = new City('New York', 40.7128, -74.0060);
newYork.addWeatherData(nyWeather);

const weatherService = new WeatherService();
weatherService.addCity(newYork);

console.log(newYork.getAverageTemperature('2024-08-01', '2024-08-07'));
// Output: 28

console.log(weatherService.getWeatherAlert());
// Output: "No severe weather alerts at this time."

*/

// >>>>>>>>>>>>>>>>>>>>>>> Task 03 <<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*
Task: Develop a Cricket Match Scorecard System

Scenario:
You're tasked with creating a JavaScript-based scorecard system for a T20 cricket match. The system should track player performances, team scores, and generate match statistics.

Requirements:
1. Create a Player class to represent individual cricketers.
2. Implement a Team class to manage a cricket team.
3. Develop a Match class to handle the overall match proceedings.
4. Implement methods for updating scores, wickets, and other match events.
5. Generate match statistics and player performance reports.

Detailed Requirements:

1. Player class:
   - Properties: name, role (batsman, bowler, all-rounder), runsScored, ballsFaced, wicketsTaken, oversBowled
   - Methods: updateBattingStats(runs, balls), updateBowlingStats(wickets, overs)

2. Team class:
   - Properties: name, players (array of Player objects), totalScore, wicketsLost
   - Methods: addPlayer(player), updateScore(runs), updateWickets()

3. Match class:
   - Properties: team1, team2, overs, currentInnings
   - Methods: startInnings(battingTeam, bowlingTeam), updateScore(runs), updateWicket(batsman, bowler), endInnings(), getMatchSummary()

Example Output:

const match = new Match(20); // T20 match

const team1 = new Team("India");
const team2 = new Team("Australia");

const viratKohli = new Player("Virat Kohli", "batsman");
team1.addPlayer(viratKohli);

const patCummins = new Player("Pat Cummins", "bowler");
team2.addPlayer(patCummins);

match.startInnings(team1, team2);

match.updateScore(4); // Virat hits a four
viratKohli.updateBattingStats(4, 1);

match.updateWicket(viratKohli, patCummins);
patCummins.updateBowlingStats(1, 0.1);

console.log(match.getMatchSummary());
// Output: 
// {
//   team1: { name: "India", score: 4, wickets: 1 },
//   team2: { name: "Australia", score: 0, wickets: 0 },
//   overs: 0.1,
//   currentInnings: 1
// }

console.log(viratKohli);
// Output: { name: "Virat Kohli", runsScored: 4, ballsFaced: 1, ... }

console.log(patCummins);
// Output: { name: "Pat Cummins", wicketsTaken: 1, oversBowled: 0.1, ... }

*/

// >>>>>>>>>>>>>>>>>>>>>>> Task 04 <<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*
Task: Develop a Simple Banking System

Scenario:
You're tasked with creating a JavaScript-based banking system. The system should handle customer accounts, perform basic banking operations, and generate account statements.

Requirements:
1. Create a Customer class to represent bank customers.
2. Implement an Account class to manage different types of bank accounts.
3. Develop a Bank class to handle overall banking operations.
4. Implement methods for deposits, withdrawals, and transfers between accounts.
5. Generate account statements and balance inquiries.
6. Implement basic interest calculation for savings accounts.

Detailed Requirements:

1. Customer class:
   - Properties: name, customerId, contactInfo
   - Methods: updateContactInfo(newInfo)

2. Account class:
   - Properties: accountNumber, accountType (checking/savings), balance, owner (Customer object)
   - Methods: deposit(amount), withdraw(amount), getBalance(), addInterest() (for savings accounts)

3. Bank class:
   - Properties: name, accounts (array of Account objects)
   - Methods: createAccount(customer, type, initialDeposit), closeAccount(accountNumber), findAccount(accountNumber), transferMoney(fromAccount, toAccount, amount), generateStatement(account)

Example Output:

const bank = new Bank("MyBank");

const customer1 = new Customer("John Doe", "C001", "john@example.com");
const account1 = bank.createAccount(customer1, "savings", 1000);

account1.deposit(500);
console.log(account1.getBalance());
// Output: 1500

account1.withdraw(200);
console.log(account1.getBalance());
// Output: 1300

const customer2 = new Customer("Jane Smith", "C002", "jane@example.com");
const account2 = bank.createAccount(customer2, "checking", 500);

bank.transferMoney(account1, account2, 300);
console.log(account1.getBalance());
// Output: 1000
console.log(account2.getBalance());
// Output: 800

console.log(bank.generateStatement(account1));
// Output: 
// {
//   accountNumber: "1001",
//   accountType: "savings",
//   balance: 1000,
//   transactions: [
//     { type: "deposit", amount: 500, date: "2024-08-04" },
//     { type: "withdrawal", amount: 200, date: "2024-08-04" },
//     { type: "transfer", amount: 300, date: "2024-08-04" }
//   ]
// }

*/
