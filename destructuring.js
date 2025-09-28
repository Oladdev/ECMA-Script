// destructuring is an ES6 feature that allows you to unpack values from arrays or properties from objects into distinct variables.
// Here's an example of how to use destructuring in JavaScript:
const person = {
  name: "Ola",
  age: 20,
  country: "Nigeria"
};

const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`);

const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);
