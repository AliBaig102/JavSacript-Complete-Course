//   Arrays in JavaScript
// - Creating and Accessing Arrays
// - Array Methods
// - Multidimensional Arrays
// - Array Destructuring

// What are Arrays?
// - An array is a data structure that stores multiple values in a single variable.
// - An array is a collection of values that can be accessed using an index.
// - An array is a data type that can be used to store multiple values in a single variable.

// Example
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

// if you want to access an element in an array, you can use the index
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4
console.log(arr[4]); // 5
console.log(arr[5]); // undefined

// if you want to change an element in an array, you can use the index
arr[0] = 10;
console.log(arr); // [10, 2, 3, 4, 5]

// if you want to add an element to an array, you can use the index
arr[5] = 6;
console.log(arr); // [10, 2, 3, 4, 5, 6]

// if you want to remove an element from an array, you can use the index
delete arr[0];
console.log(arr); // [undefined, 2, 3, 4, 5, 6]

// if you want to get the length of an array, you can use the length property
console.log(arr.length); // 6

// Looping in an Array
// - for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// - for...of
for (let val of arr) {
    console.log(val);
}

// - forEach
arr.forEach(function (val) {
    console.log(val);
});

// - for...in
for (let i in arr) {
    console.log(arr[i]);
}

// - while
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// - do...while
let j = 0;
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

// Multidimensional Arrays
// - 2D Arrays
// - Jagged Arrays
// - Multidimensional Arrays

// 2D Arrays
let arr2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(arr2d); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Jagged Arrays
let arr3d = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
];
console.log(arr3d); // [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

// Multidimensional Arrays
let arr4d = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
];
console.log(arr4d); // [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]

// Array Destructuring
let fruit = [
    "apple",
    "banana",
    "orange",
    "pineapple",
    "grape",
    "mango",
    "kiwi",
    "strawberry",
];
// first Way
let apple = fruit[0];
let banana = fruit[1];
let orange = fruit[2];
let pineapple = fruit[3];
let grape = fruit[4];
let mango = fruit[5];
let kiwi = fruit[6];
let strawberry = fruit[7];
console.log(apple, banana, orange, pineapple, grape, mango, kiwi, strawberry);

// Second Way
let [apple2, banana2, orange2, pineapple2, grape2, mango2, kiwi2, strawberry2] =
    fruit;
console.log(
    apple2,
    banana2,
    orange2,
    pineapple2,
    grape2,
    mango2,
    kiwi2,
    strawberry2,
);

// Array Cloning
// First Way
let arr6 = arr5.slice();

// Second Way
let arr7 = arr5.concat();

// Third Way
let arr8 = [...arr5];

// Array Methods

// 1. push - adds an element to the end of an array
let arr9 = [1, 2, 3, 4, 5];
arr9.push(6);
console.log(arr9); // [1, 2, 3, 4, 5, 6]

// 2. pop - removes an element from the end of an array
arr9.pop();
console.log(arr9); // [1, 2, 3, 4, 5]

// 3. unshift - adds an element to the beginning of an array
arr9.unshift(0);
console.log(arr9); // [0, 1, 2, 3, 4, 5]

// 4. shift - removes an element from the beginning of an array
arr9.shift();
console.log(arr9); // [1, 2, 3, 4, 5]

// 5. reverse - reverses the order of an array
arr9.reverse();
console.log(arr9); // [5, 4, 3, 2, 1]

// 6. sort - sorts the elements of an array
arr9.sort();
console.log(arr9); // [1, 2, 3, 4, 5]

// 7. join - joins all elements of an array into a string
let arr10 = [
    "apple",
    "banana",
    "orange",
    "pineapple",
    "grape",
    "mango",
    "kiwi",
    "strawberry",
];
console.log(arr10.join()); // apple,banana,orange,pineapple,grape,mango,kiwi,strawberry
console.log(arr10.join(" ")); // apple banana orange pineapple grape mango kiwi strawberry
console.log(arr10.join(" - ")); // apple - banana - orange - pineapple - grape - mango - kiwi - strawberry

// 8. concat - combines two or more arrays
let arr11 = [1, 2, 3, 4, 5];
let arr12 = [6, 7, 8, 9, 10];
let arr13 = arr11.concat(arr12);
console.log(arr13); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 9. slice - extracts a section of an array
let arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr15 = arr14.slice(2, 6);
console.log(arr15); // [3, 4, 5, 6]

// 10. splice - removes elements from an array
let arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr16.splice(2, 4);
console.log(arr16); // [1, 2, 7, 8, 9, 10]

// 11. includes - checks if an element is in an array
let arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr17.includes(5)); // true
console.log(arr17.includes(15)); // false

// 12. indexOf - returns the index of an element
console.log(arr17.indexOf(5)); // 4
console.log(arr17.indexOf(15)); // -1

// 13. lastIndexOf - returns the last index of an element
console.log(arr17.lastIndexOf(5)); // 4
console.log(arr17.lastIndexOf(15)); // -1

// 14. every - checks if all elements satisfy a condition
let arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr18.every((val) => val > 0)); // true
console.log(arr18.every((val) => val > 10)); // false

// 15. some - checks if any element satisfies a condition
console.log(arr18.some((val) => val > 10)); // true
console.log(arr18.some((val) => val > 20)); // false

// 16. find - returns the first element that satisfies a condition
let arr19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr19.find((val) => val > 5)); // 6

// 17. findIndex - returns the index of the first element that satisfies a condition
console.log(arr19.findIndex((val) => val > 5)); // 5

// 18. map - creates a new array by applying a function to each element
let arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr21 = arr20.map((val) => val * 2);
console.log(arr21); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 19. filter - creates a new array by filtering out elements that don't satisfy a condition
let arr22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr23 = arr22.filter((val) => val % 2 === 0);
console.log(arr23); // [2, 4, 6, 8, 10]

// 20. reduce - reduces an array to a single value
let arr24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr25 = arr24.reduce((acc, val) => acc + val, 0);
console.log(arr25); // 55

// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 01 <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// JavaScript Array Mastery Tasks

// 1. Creating and Modifying Arrays
// Scenario: You're building a task management application.
// Task:
// - Create an array called 'tasks' with initial to-do items.
// - Implement functions to:
//   a) Add a new task to the end of the array
//   b) Remove the first task from the array
//   c) Update a task at a specific index
// - After each operation, log the updated array.

// 2. Looping Through Arrays
// Scenario: You're developing a grade calculation system for a school.
// Task:
// - Create an array of student objects, each with 'name' and 'grades' (array of numbers) properties.
// - Implement a function that:
//   a) Calculates the average grade for each student
//   b) Adds an 'averageGrade' property to each student object
//   c) Logs each student's name and average grade
// - Use a different type of loop for each sub-task (for, while, forEach)

// 3. Array Destructuring
// Scenario: You're working on a weather application that receives data from a weather API.
// Task:
// - Create an array 'weatherData' with elements: temperature, humidity, windSpeed, and condition
// - Use array destructuring to assign these values to individual variables
// - Create a function that takes this weather data as an argument and returns a formatted weather report
// - Bonus: Use rest parameters to handle additional weather data that might be present

// 4. Array Method: map()
// Scenario: You're building a library catalog system.
// Task:
// - Create an array of book objects, each with properties: id, title, author, and publicationYear
// - Use the map() method to create a new array containing only the titles and authors
// - Create another map() that returns a string for each book in the format: "Title by Author (Year)"

// 5. Array Methods: filter() and find()
// Scenario: You're creating a product search feature for an e-commerce site.
// Task:
// - Create an array of product objects with properties: id, name, category, price, and inStock
// - Use filter() to:
//   a) Get all products in a specific category
//   b) Get all products that are in stock and under a certain price
// - Use find() to:
//   a) Get the first product with a specific id
//   b) Find the cheapest product that is in stock

// 6. Array Methods: reduce()
// Scenario: You're developing a analytics dashboard for a company's sales data.
// Task:
// - Create an array of sale objects, each with properties: product, quantity, and unitPrice
// - Use reduce() to:
//   a) Calculate the total revenue from all sales
//   b) Create an object that shows total quantity sold for each product
//   c) Find the sale with the highest revenue

// 7. Array Methods: sort()
// Scenario: You're working on a leaderboard for a gaming application.
// Task:
// - Create an array of player objects, each with properties: username, score, and level
// - Implement functions to sort the leaderboard:
//   a) By score (highest to lowest)
//   b) By level (highest to lowest)
//   c) Alphabetically by username
// - Create a function that returns the top N players

// 8. Combining Array Methods
// Scenario: You're building a data analysis tool for a social media platform.
// Task:
// - Create an array of post objects, each with properties: id, user, content, likes, shares, and timestamp
// - Implement functions that use a combination of array methods to:
//   a) Get the top 5 most liked posts
//   b) Calculate the average number of likes for posts by each user
//   c) Find the user with the most popular post (highest combination of likes and shares)
//   d) Get all posts from the last 24 hours, sorted by popularity (likes + shares)

// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 02 <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Cricket Data Analysis with JavaScript Arrays

// 1. Player Statistics
// Scenario: You're building a cricket player statistics dashboard.
// Task:
// - Create an array of player objects, each containing:
//   name, matches played, runs scored, wickets taken, and batting average
// - Implement functions to:
//   a) Find the player with the highest batting average
//   b) Sort players by total runs scored
//   c) Calculate the team's total wickets taken

// 2. Match Scorecard
// Scenario: You're developing a digital scorecard for a T20 match.
// Task:
// - Create an array to represent each over, containing runs scored in each ball
// - Implement functions to:
//   a) Calculate total score and wickets
//   b) Find the over with the most runs scored
//   c) Calculate the run rate

// 3. Tournament Standings
// Scenario: You're managing data for a cricket tournament.
// Task:
// - Create an array of team objects with properties:
//   name, matches played, wins, losses, points
// - Use array methods to:
//   a) Sort teams by points (highest to lowest)
//   b) Find teams with more than 3 wins
//   c) Calculate the win percentage for each team

// 4. Player Performance Tracker
// Scenario: You're analyzing player performance across multiple matches.
// Task:
// - Create a nested array where each sub-array represents a player's scores in different matches
// - Implement functions to:
//   a) Calculate each player's average score
//   b) Find the highest individual score in the tournament
//   c) Identify players who scored over 50 in more than 3 matches

// 5. Bowling Analysis
// Scenario: You're creating a bowling performance analyzer.
// Task:
// - Create an array of bowler objects with properties:
//   name, overs bowled, runs conceded, wickets taken
// - Use array methods to:
//   a) Calculate the economy rate for each bowler
//   b) Sort bowlers by wickets taken
//   c) Find the bowler with the best strike rate (balls per wicket)

// 6. Team Selection
// Scenario: You're assisting in team selection for an upcoming match.
// Task:
// - Create arrays for batsmen, bowlers, and all-rounders
// - Implement functions to:
//   a) Select top 6 batsmen based on batting average
//   b) Select top 4 bowlers based on economy rate
//   c) Select the best all-rounder based on a combined performance index

// 7. Match Moment Analysis
// Scenario: You're working on a system to identify key moments in a match.
// Task:
// - Create an array representing ball-by-ball data of a match (runs, wickets, extras)
// - Use array methods to:
//   a) Identify all boundaries (4s and 6s)
//   b) Find the over with the most wickets
//   c) Calculate the dot ball percentage

// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 03 <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Office Management System with JavaScript Arrays

// 1. Employee Directory
// Scenario: You're building an employee management system.
// Task:
// - Create an array of employee objects, each containing:
//   id, name, department, position, salary, and joinDate
// - Implement functions to:
//   a) Find employees by department
//   b) Sort employees by salary (highest to lowest)
//   c) Calculate average salary per department

// 2. Meeting Room Booking
// Scenario: You're developing a meeting room booking system.
// Task:
// - Create an array of meeting room objects with properties:
//   roomId, capacity, equipment, and availability (array of time slots)
// - Implement functions to:
//   a) Find available rooms for a given time slot
//   b) Book a room for a specific time
//   c) List all rooms sorted by capacity

// 3. Project Task Tracker
// Scenario: You're managing tasks for various office projects.
// Task:
// - Create an array of task objects with properties:
//   id, projectId, assignedTo, description, status, dueDate
// - Use array methods to:
//   a) Filter tasks by project and status
//   b) Find overdue tasks
//   c) Group tasks by assignee

// 4. Office Supply Inventory
// Scenario: You're tracking office supplies inventory.
// Task:
// - Create an array of supply objects with properties:
//   item, quantity, lastOrderDate, minimumThreshold
// - Implement functions to:
//   a) List items that need reordering (below minimum threshold)
//   b) Update quantity when new supplies arrive
//   c) Calculate total value of inventory (assuming each item has a price)

// 5. Employee Attendance Tracker
// Scenario: You're building an attendance tracking system.
// Task:
// - Create a nested array where each sub-array represents a week of attendance for an employee
// - Implement functions to:
//   a) Calculate attendance percentage for each employee
//   b) Find employees with perfect attendance
//   c) Identify the day of the week with the most absences

// 6. Document Management
// Scenario: You're creating a document management system.
// Task:
// - Create an array of document objects with properties:
//   id, title, author, department, creationDate, lastModified, tags (array)
// - Use array methods to:
//   a) Search documents by tag or author
//   b) Sort documents by last modified date
//   c) Group documents by department

// 7. Performance Review System
// Scenario: You're assisting HR with employee performance reviews.
// Task:
// - Create an array of performance review objects with properties:
//   employeeId, reviewerId, scores (object with different metrics), comments
// - Implement functions to:
//   a) Calculate average score for each employee across all reviews
//   b) Identify top performers (top 10% based on average score)
//   c) Generate a summary of improvement areas based on lowest scoring metrics
