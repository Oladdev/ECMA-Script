// classes is an ES6 feature that is used to create objects and handle inheritance in a more structured way.
// Here's an example of how to define and use a class in JavaScript:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Ola", 20);
person1.greet();
