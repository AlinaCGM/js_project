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
//

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

// const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[1]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //ES6 ENHANCED OBJECT LITERALS
//   openingHours,
//   //WE CHANGED 'order: function() ' to a easy way
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious oasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
// };
// //WITH optional chaining '.mon?.open'

// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we are open at ${open}`);
// }

// const users = [];
// console.log(users[0]?.name ?? 'User array empty');
// console.log('---------new--------');
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

//LOOP THROUGH PROPERTIES

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
//the same as above //PROPERTY NAMES
// const properties = Object.keys(openingHours);

// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr = openStr + `${day},`;
// }
// console.log(openStr);
//entries

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// console.log('-----football chalenge-----');

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowsli',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4.0',
//   scored: ['Lewandowsli', 'Gnarby', 'Lewandowsli', 'Hummels'],
//   date: 'Nov 9th, 2022',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // for (const [i, plays] of game.players[0].entries())
// //   console.log(`Hello ${i + 1} ${plays}`);

// const calcAv = Object.values(game.odds);
// let average = 0;
// for (const y of calcAv) average += y;
// average /= calcAv.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}${odd}`);
// }

console.log('------SETS------');
//on Sets there are no INDEXES and you cannot get VALUE OF a SET
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic bread');
ordersSet.delete('Risotto');
// ordersSet.clear();  clear all the set
console.log(ordersSet);

for (const item of ordersSet) console.log(item);

const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log('-----MAPS-------');
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Italy');
rest.set(2, 'Portugal'); // this method apdates MAPS and returns the MAP
console.log(rest.set(2, 'Portugal'));

rest
  .set('categories', ['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
console.log(rest.get('name'));
console.log(rest.get(true));

const times = 21;
console.log(rest.get(times >= rest.get('open') && times < rest.get('closed')));
rest.delete(2);
console.log(rest);

console.log('----QUESTION-------');
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'jAVA'],
  [3, 'JS'],
  [true, 'correct'],
  [false, 'try again'],
]);
// console.log(question);
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 12,
//     close: 22,
//   },
//   sat: {
//     open: 12,
//     close: 22,
//   },
// };
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// // console.log(answer);

// // console.log(question.get(question.get('correct') === answer));

// //Convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

console.log('-----FOOTBALL GAME------');
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete('🔶 Yellow card');
console.log(gameEvents);

const time = [...gameEvents.keys()].pop(); //it takes the last element out of the array, even if it was deleted
console.log(time);
console.log(`An event happened , pn average, every ${time / gameEvents.size}`);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half}HALF] ${min}: ${event}`);
}

console.log('----STRING-----');

const airline = 'Tap Air Portugal';

const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log(plane.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.slice(4));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-5));
console.log(airline.slice(-1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  console.log(s);
  if (s === 'B' || s === 'E') console.log('You are loser');
  else console.log('Winner');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('alina'));

//FIX capitalization in capital name

const alina = 'samoteev';
console.log(alina.toLowerCase());
console.log(alina.toUpperCase());

const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@alina';
const loginEmail = '  Hello@Alina \n';
console.log(loginEmail);
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
//orr shorter way
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//REPLACING

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
  'All passenger come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll(announcement, 'alina balerina'));
console.log(announcement.replace(/door/g, 'gate')); //replace globaly this word to 'gate'

console.log('----NEXT example-----');

const planes = 'A320neo';
console.log(planes.includes('A320')); // search
console.log(planes.startsWith('A3'));
if (planes.startsWith('A3') && planes.endsWith('neo')) {
  console.log('very good');
}

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  console.log(baggage);
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('forbidden baggage');
  } else {
    ('welcome on board');
  }
};
checkBaggage('I have a laptop ,food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('snacks and Gun');

console.log('---split method---');
console.log('a+very+nice+string'.split('+'));
console.log('alina bogza'.split(' '));

const [firstName, lastName] = 'Alina Samoteev'.split(' ');
const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

console.log('------CAPITALIZATION------');
const capitalizeName = function (name) {
  const names = name.split(' ');

  const namesUpper = [];

  for (const item of names) {
    namesUpper.push(item[0].toUpperCase() + item.slice(1));
    //or other way
    //namesUpper.push(item.replace(n[0],n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica and smith david');
capitalizeName('jonas duglas');

console.log('---padding---');
const message = 'Go to gate 23';
console.log(message.padStart(25, '*').padEnd(30, '+'));

console.log('---MASk credit card---');
const maskCreditCard = function (number) {
  const str = number + ''; //or String()//when one of the       operants is a string, it will convert all of them to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(548789));
console.log(maskCreditCard('123456789'));

console.log('---REPEAT----');
const message2 = 'Bad weather ...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${' * '.repeat(n)}`);
};
planesInLine(5);
planesInLine(15);
planesInLine(25);

console.log('----new chalenge----');
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n'); //divide into lines
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_'); //trim() method removes whitespace from both ends of a string and returns a new string
    // split('_') razdeliaet slova v meste gde '_'
    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${'*'.repeat(i + 1)}`);
  }
});

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
