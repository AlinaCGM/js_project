'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//slice method ---------- it just copied the array
console.log('---slice method---');
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
//spred operator
console.log([...arr]);
//splice method   ----- it takes of the items from array for good

//REVERSE method -----reverse the array for good
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 't', 'i', 'd'];
console.log(arr2.reverse());

//CONCAT -------split smth together
const letters = arr.concat(arr2);
console.log(letters);
///the same thing as below
console.log([...arr, ...arr2]);

//JOIN   ------ adds smth you want
console.log(letters.join('-'));

//new 'at method'
console.log('---new at method---');
const arrr = [23, 11, 64];
console.log(arrr[0]);
console.log(arrr.at(0));

//to pick the last element
console.log(arrr[arrr.length - 1]);
console.log(arrr.slice(-1)[0]);
console.log(arrr.at(-1));

//////////LOOPING ARRAY FOR EACH
console.log('---for loop----');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  //entries() gives the access to the current index
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('---FOREACH loop----');

movements.forEach(function (mov, i, arr) {
  //the fisrt shoud be the current element, 2-current index,3-entire array
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
});

console.log('----MAP---');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});
console.log('----SET---');

const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'GBP']);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});

///new challenge
console.log('---new challenge---');

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();

  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old `);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('-----project----');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

////-----MAP----
console.log('-----MAP----');
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return Math.abs(Math.trunc(mov * eurToUsd));
// }); //we need a call back function
const movementsUSD = movements.map(mov => Math.abs(Math.trunc(mov * eurToUsd)));
console.log(movements);
console.log(movementsUSD);

//---the same with forEach loop
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposeted ${mov}`;
//   } else {
//     return `Movements ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; //removes all previous HTML
  //OR .textContent=0
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //adds new HTML, WHICH we just corrected from our existed HTML
  });
};
displayMovements(account1.movements);
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
const user = 'Steven Thomas Williams'; //stw

createUsernames(accounts);

// FILTER METHOD
console.log('---FILTER METHOD-----');
