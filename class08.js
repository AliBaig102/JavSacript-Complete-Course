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
arr.forEach(function(val) {
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
    [7, 8, 9]
];
console.log(arr2d); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Jagged Arrays
let arr3d = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];
console.log(arr3d); // [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

// Multidimensional Arrays
let arr4d = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];
console.log(arr4d); // [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]

// Array Destructuring
let fruit = ["apple", "banana", "orange", "pineapple", "grape", "mango", "kiwi", "strawberry"];
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
let [apple2, banana2, orange2, pineapple2, grape2, mango2, kiwi2, strawberry2] = fruit;
console.log(apple2, banana2, orange2, pineapple2, grape2, mango2, kiwi2, strawberry2);

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
let arr10 = ["apple", "banana", "orange", "pineapple", "grape", "mango", "kiwi", "strawberry"];
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


