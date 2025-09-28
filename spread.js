// spread operator is used to expand elements of an iterable (like an array or object) into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];

const person = { name: "Precious", age: 20 };
const updatedPerson = { ...person, country: "Nigeria" };

console.log("Combined Array:", combined);
console.log("Updated Person:", updatedPerson);
// Output: Combined Array: [1, 2, 3, 4, 5]
// Output: Updated Person: { name: 'Precious', age: 20, country: 'Nigeria' }