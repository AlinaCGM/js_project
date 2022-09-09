'use strict';

// var me = 'Alina';
// let job = 'teacher';
// const year = 1982;

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //this keyword

// const alina = {
//   name: 'Alina',
//   year: 1982,
//   calcAge: function () {
//     return 2022 - this.year;
//   },
// };
// // console.log(alina.calcAge());

// //arrow function don't get 'this'!! just from parent function

// const jonas = {
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge; //method borrowing
// matilda.calcAge();

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruscheta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 12,
//       close: 22,
//     },
//     sat: {
//       open: 12,
//       close: 22,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const item of menu.entries()) {
//   console.log(item); //method gives us the index of each item
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// //THE OTHER WAY TO DO IT
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// //Iterables: arrays, strings, maps, sets.NOT objects
// const str = 'Alina';
// const letters = [...str];
// console.log(letters);
// const bobo = [11, 22, 33];
// const dodo = [...bobo];
// console.log(dodo);
// // (`${...str, ...dodo} and Dinu`) template literal

// //SPRED OPERATOR
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// //OR!!
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'Via del Cruce,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);

// //destructure OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //destructure and give new names to variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //destructure and make new default value

// const { menu = [], starterMenu: starterr = [] } = restaurant;
// console.log(menu, starterr);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); // we wrapped variables in parentheses to overwrite  initial value
// console.log(a, b);
// //NESTED OBJECTS
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //destructure ARRAY

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested array

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [s, , [d, k]] = nested;
// console.log(s, d, k);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovani Rossi',
// };
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10; //the same as above
// rest2.numGuests ??= 10;
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);
//--------------------------------------------------------------
//object literal syntax

const weekdays = ['mon', 'thu', 'sat'];
const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 ENHANCED OBJECT LITERALS
  openingHours,
  //WE CHANGED 'order: function() ' to a easy way
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious oasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
//WITH optional chaining '.mon?.open'

console.log(restaurant.openingHours.mon?.open);
