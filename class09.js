// String Methods

// 1. length
const name = "abul";
console.log(name.length); // 4

// 2. trim
console.log(name.trim()); // abul

// 3. trimLeft
console.log(name.trimLeft()); // abul

// 4. trimRight
console.log(name.trimRight()); // abul

// 5. indexOf
console.log(name.indexOf("a")); // 1

// 6. lastIndexOf
console.log(name.lastIndexOf("a")); // 3

// 7. includes
console.log(name.includes("a")); // true

// 8. repeat
console.log(name.repeat(3)); // abulabulabul

// 9. slice
console.log(name.slice(1)); // bul

// 10. substring
console.log(name.substring(1)); // bul

// 11. substring
console.log(name.substring(1, 3)); // bu

// 12. match
console.log(name.match(/a/g)); // ["a", "a", "a"]

// 13. replace
console.log(name.replace("a", "b")); // bbul

// 14. search
console.log(name.search("a")); // 1

// 15. split
console.log(name.split("")); // ["a", "b", "u", "l"]

// 16. startsWith
console.log(name.startsWith("a")); // true

// 17. endsWith
console.log(name.endsWith("a")); // false

// 18. charAt
console.log(name.charAt(1)); // b

// 19. charCodeAt
console.log(name.charCodeAt(1)); // 98

// 20. concat
console.log(name.concat("b")); // abulb

// 23. toUpperCase
console.log(name.toUpperCase()); // ABUL

// 24. toLowerCase
console.log(name.toLowerCase()); // abul

// 25. trimStart
console.log(name.trimStart()); // abul

// 26. trimEnd
console.log(name.trimEnd()); // abul

// 27. fromCharCode
console.log(name.fromCharCode(97)); // a

// 28. codePointAt
console.log(name.codePointAt(1)); // 97


// Number Methods


// 1. isNaN
console.log(isNaN(NaN));

// 2. isFinite
console.log(isFinite(Infinity));


// 4. parseInt
console.log(parseInt("10"));

// 5. parseFloat
console.log(parseFloat("10"));

