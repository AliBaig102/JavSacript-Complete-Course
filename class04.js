//   Control Flow
// - Conditionals (if, else, switch)
// - Loops (for, while, do...while)
// - break and continue

// ## 5.1. Conditionals
// - if
// - else
// - else if
// - nested if and else
// - switch

// if
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

// else
let y = 5;
if (y > 5) {
    console.log("y is greater than 5");
} else {
    console.log("y is not greater than 5");
}

// else if
let z = 5;
if (z > 5) {
    console.log("z is greater than 5");
} else if (z < 5) {
    console.log("z is less than 5");
} else {
    console.log("z is equal to 5");
}

// nested if and else
let w = 5;
if (w > 5) {
    console.log("w is greater than 5");
    if (w < 5) {
        console.log("w is less than 5");
    } else {
        console.log("w is equal to 5");
    }
} else {
    console.log("w is not greater than 5");
}

// switch
let a = 5;
switch (a) {
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    default:
        console.log("a is not 1, 2, or 3");
}

// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 01 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Task: School Grading System

// Scenario:
// You are creating a grading system for a school. The system should take a student's
// numerical score and convert it to a letter grade. Then, based on the letter grade,
// it should provide a corresponding message.

// Requirements:
// 1. Use a variable to store the student's score (you can set any value for testing).
// 2. Use if-else and else-if statements to determine the letter grade based on the score.
// 3. Use a switch statement to set an appropriate message based on the letter grade.
// 4. Display the score, grade, and message using console.log().

// Grading Scale:
// 90-100: A
// 80-89:  B
// 70-79:  C
// 60-69:  D
// Below 60: F

// Steps:
// 1. Declare variables for score, grade, and message.
// 2. Write if-else statements to set the grade based on the score.
// 3. Write a switch statement to set the message based on the grade.
// 4. Use console.log() to display the results.

// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 02 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Task: Simple Weather Advice System

// Scenario:
// You're developing a basic weather advice system. The system should take
// two inputs: temperature (in Celsius) and weather condition (sunny, rainy,
// or snowy). Based on these inputs, it should provide appropriate clothing
// and activity suggestions.

// Requirements:
// 1. Use variables to store temperature and weather condition.
// 2. Use if-else statements to categorize temperature (cold, mild, warm, hot).
// 3. Use a switch statement for different weather conditions.
// 4. Combine temperature category and weather condition to give advice.
// 5. Display the advice using console.log().

// Steps:
// 1. Declare variables for temperature and weather condition.
// 2. Use if-else statements to determine temperature category.
// 3. Use a switch statement for weather condition specific advice.
// 4. Combine advice from steps 2 and 3.
// 5. Display final advice with console.log().

// Temperature categories:
// Below 10°C: Cold
// 10°C to 20°C: Mild
// 21°C to 30°C: Warm
// Above 30°C: Hot

// Weather conditions to consider: sunny, rainy, snowy

// >>>>>>>>>>>>>>>>>>>>>>>>>> Task 03 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Task: Movie Ticket Pricing System

// Scenario:
// You're developing a ticket pricing system for a local movie theater.
// The price of a ticket depends on the viewer's age and the day of the week.

// Requirements:
// 1. Use a variable to store the viewer's age.
// 2. Use a variable to store the day of the week (1-7, where 1 is Monday).
// 3. Use if-else statements to determine the base price based on age:
//    - Children (0-12): $8
//    - Adults (13-59): $12
//    - Seniors (60+): $10
// 4. Use a switch statement to apply day-specific discounts:
//    - Monday, Tuesday, Wednesday: $2 off
//    - Thursday: $1 off
//    - Friday, Saturday, Sunday: No discount
// 5. Calculate and display the final ticket price.

// Steps:
// 1. Declare variables for age and day of the week.
// 2. Use if-else statements to set the base price according to age.
// 3. Use a switch statement to apply the day-specific discount.
// 4. Calculate the final price.
// 5. Display the original price, discount, and final price using console.log().
