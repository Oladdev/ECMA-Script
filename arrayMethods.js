// arrayFunctions is an ES6 feature that provides various methods to manipulate arrays in a more functional way.
// Here's an example of various array methods in JavaScript:

// Function to find the maximum number in an array
const findMax = (arr) => Math.max(...arr);

// Function to sum all elements in an array
const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

// Function to double all elements in an array
const doubleArray = (arr) => arr.map(num => num * 2);

// Function to filter out odd numbers
const filterEvens = (arr) => arr.filter(num => num % 2 === 0);

// Function to check if all elements are positive
const allPositive = (arr) => arr.every(num => num > 0);

// Demo
const numbers = [1, 2, 3, 4, 5];

console.log("Max:", findMax(numbers));
console.log("Sum:", sumArray(numbers));
console.log("Doubled:", doubleArray(numbers));
console.log("Evens:", filterEvens(numbers));
console.log("All Positive?:", allPositive(numbers));
