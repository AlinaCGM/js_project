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

console.log('----THIS keyword----');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book:function(){}    this is the old way
  book(flightNum, name) {
    //this is new syntax
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Alina Samoteev');
lufthansa.book(635, 'Dmitri Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
//---------------Call Method ---------
//we copied function from lufthansa and by writing "eurowings" we reasigned 'this' keyword to eurowings
const book = lufthansa.book;
book.call(eurowings, 23, 'Michaela Samoteev'); //CALL method can call any function
console.log(eurowings);

//and one more example how THIS keyword reasign to ne function which is called by 'call()' method

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookigs: [],
};

book.call(swiss, 123, 'Gabriel');

//apply method is an old one
//---------------other  Method ---------

const flightData = [583, 'Chiril Bogza'];
book.call(swiss, ...flightData);
console.log(flightData);
console.log('-----exers-------');

//////  BIND method
//book.call(eurowings, 23, 'Michaela Samoteev');
const bookEW = book.bind(eurowings);
const bookSW = book.bind(swiss);
bookEW(23, 'Steven Williams');
bookSW(41, 'ALINA SAMOTEEV');

console.log('----WITH EVENT LISTENERS----');
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23); //there is mo THIS keyword upp there, so we write 'null' instead. Thew rate is default, so just value need to be added
console.log(addVAT(500));

// call function in function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

/////---NEW CHALLENGE
//'JOIN' method transforms ARRAY into STRING!!!

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n('Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

//Immediately invoked Functions impressions
console.log('------Immediately invoked Functions impressions------');

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//BELOW THE EXAMPLE OF IIFE
(function () {
  console.log('This will never run again2');
})();
//---------------
(() => console.log('This will never run again3'))();

//closures-------
console.log('-----CLOSURES-----');

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking(2);

//closure makes a function remember all the variables that existed at the function's birthplace essentially
console.dir(booker);
//.....new example----

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
