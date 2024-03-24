function Person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype

// new

let Rubel = new Person("Rubel", "60");
let SuhagBhai = new Person("Sugah Bhai", "80");

// console.log(SuhagBhai);

Rubel.bia = true;
// console.log(Rubel.bia);
// console.log(SuhagBhai.bia);
SuhagBhai.fullDetails = function () {
  return `My name is ${this.name} and my age is ${this.age}`;
};

console.log(SuhagBhai.fullDetails());
