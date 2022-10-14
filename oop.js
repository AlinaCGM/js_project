'use strict';
//the difference btw regular function and constructor function is in word'new'
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never do this
  //   this.calcAge = function () {
  //     console.log(2022 - birthYear);
  //   };
};

const alina = new Person('Alina', 1982);
const dinu = new Person('Dinu', 1984);
const nata = new Person('Nata', 1986);

console.log(alina);

//how it works
//1.new {} is created
//2.function is called, this = {}
//3. {}linked to prototype
//4.function automatically return {}

//each function in JS has property called PROTOTYPES

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  //its not a prototype of Person, its object created by Person
  console.log(2022 - this.birthYear);
};
alina.calcAge();
dinu.calcAge();
nata.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(alina.species, dinu.species);

//---------Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

document.getElement('p').innerHTML = 'balerina';
