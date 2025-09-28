// arrowFunctions is an ES6 feature that provides a shorter syntax for writing functions and lexically binds the `this` value.
// Here's an example of various ways to use arrow functions in JavaScript:


// 1. Basic arrow function with two parameters
const add = (a, b) => a + b;
console.log("Add:", add(5, 3));  // 8

// 2. Arrow function with one parameter (no parentheses needed)
const square = num => num * num;
console.log("Square:", square(4));  // 16

// 3. Arrow function with no parameters
const greet = () => "Hello, This is an ES6! frature called Arrow Functions";
console.log(greet());  // "Hello, This is an ES6! feature called Arrow Functions";


// 4. Arrow function as a callback (with map)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 5. Arrow function with implicit return of an object
const createUser = (name, age) => ({ name, age });
console.log("User:", createUser("Ola", 20));

// 6. Arrow function inside setTimeout
setTimeout(() => {
  console.log("This message is delayed by 1 second");
}, 1000);
