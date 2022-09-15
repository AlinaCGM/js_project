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
