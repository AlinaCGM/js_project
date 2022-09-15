'use strict';
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123', 22, 250);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Dadidson',
  passport: 21324566,
};
const checkin = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  //   if (passenger.passport === 21324566) {
  //     alert('check in');
  //   } else {
  //     alert('wrong passport');
  //   }
};
checkin(flight, jonas);
console.log(flight);
console.log(jonas);

console.log('----higherOrderFunctions--------');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' '); //join() returns an array as a string
};
const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Transfomred by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);
console.log('---new ex---');

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Alina');
greeterHey('Dinu');
//OR THE SAME BUT ARROW FUNCTION

const dreet = greeting => name => console.log(`${greeting} ${name}`);

dreet('Hey')('Aliosha');
