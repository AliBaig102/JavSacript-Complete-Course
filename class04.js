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
