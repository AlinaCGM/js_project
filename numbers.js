/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
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
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-US',
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

//
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};
///
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
////////
const displayMovements = function (acc, sort = true) {
  containerMovements.innerHTML = ''; //removes all previous HTML
  //OR .textContent=0
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0); //index starts from 0!!!
    const hour = `${date.getHours()}`.padStart(2, 0);
    const min = `${date.getMinutes()}`.padStart(2, 0);
    const year = date.getFullYear();

    const displayDate = `${day}/${month}/${year}, ${hour}:${min}`;

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    }${type} £</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //adds new HTML, WHICH we just corrected from our existed HTML
  });
};
//
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
//
//

createUsernames(accounts);

// UPDATE UI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  //DisplaY BALANCE
  calcDisplayBalance(acc);

  //Display summery
  calcDisplaySummary(acc);
};
// Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log('currentAccount');
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.trunc(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDate.push(new Date());

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.trunc(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    //Update UI
    updateUI(currentAccount);
    //CLEAR FIELD
    inputLoanAmount.value = '';
  }
});

//DELETE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    //HIDE ui
    containerApp.style.opacity = 100;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
//
//
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};
//
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
// FILTER METHOD
console.log('---FILTER METHOD-----');
//call back function
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
//and the same with for of loop----

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//------Reduce method
console.log('------Reduce method------');
// accumulator is like a snowball
// const balance = movements.reduce(function (accomulator, currel, i, arr) {
//   return accomulator + currel;
// }, 0);
// console.log(balance);
//REDUCE METH. has 2 param: callback function and the initial value of the accumulator.
const balance = movements.reduce(
  (accomulator, currel) => accomulator + currel,
  0
);
console.log(balance);

//and the same with FOR  loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
//Maximum value
console.log('-----//Maximum value');

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

////Chaining method
console.log('-------Chaining method--------');
//const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
///The find method
console.log('-------The find method----');

//this method will withdraw the first element met the condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// includes method & some & every
console.log(movements);
console.log(movements.includes(-130)); //check on equality

//SOME
///check if any element meets the condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//EVERY
console.log(movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
//FLAT method
const ars = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(ars.flat());
const arsDeep = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  7,
  8,
];
console.log(arsDeep.flat(2));
//THE LONG WAY

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

//THE SHORT WAY
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap method
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) //goes just 1 level deep!!
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

//Sorting Arrays
console.log('---//Sorting Arrays-----');
/////with STRINGS
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']; //it mutates the original array
console.log(owners.sort());
/////with NUMBERS
console.log(movements);
console.log(movements.sort()); //it sorts as it would be a string, not numbers

//fill method for Empty array
const x = new Array(7); //fills in the array
x.fill(1);
console.log(x);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
const j = Array.from(
  { length: 100 },
  (cur, i) => i + Math.trunc(Math.random())
);
console.log(j);

const [...a] = 'alina';
console.log(a);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements_value'));
  console.log(movementsUI.map(el => el.textContent.replace('€', '¥')));
});
//
//
//
// NEW CHALLENGE
console.log('----NEW CHALLENGE-----');

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// const bankDollar = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(bankDollar);

const bankDollar = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); //++ before accumulator if parameter starts from 0, otherwise it will still remain 0. OR just +1
console.log(bankDollar);

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //ONE WAY
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      // return sums;
      //if there are {} we need to RETURN the accumulator manually
      //OTHER WAY
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

///NUMBERS
console.log('----  ///NUMBERS----');

//Conversion
console.log(Number('23'));
//the same result other way
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px')); //finds numbers in a string =30
console.log(Number.parseInt('30px', 10)); //10 is 2nd argument, means it should be a number from 0 to 10.
//if you right 2 as an argument, you should expect binary number 2-01

console.log(Number.parseInt('px28 ')); //if letters in front = NaN
console.log(Number.parseFloat('2.3ps ')); //if letters in front = NaN
//parse.Float('2.5 rem')
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN(20 / 0)); //not allowed
//check if value is number
console.log(Number.isFinite(20));
console.log(Number.isInteger(+'18'));
///-----MATH AND ROUNDING
console.log('-----///-----MATH AND ROUNDING------');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); //the same as above
console.log(8 ** (1 / 3)); //cub

//Math.max
console.log(Math.max(25, 2, 5, 9, 7, 11));
//the same result with string
console.log(Math.max('25', 2, 5, 9, 7, 11));
console.log(Math.min(25, 2, 5, 9, 7, 11));

//calculate the are of the circle with radius of 10px
console.log(Math.PI * parseFloat('10px') ** 2);

//ROUNDING
console.log(Math.trunc(21.6)); //round down
//and the same
console.log(Math.round(21.3)); //round to the nearest
console.log(Math.ceil(21.3)); //round up
console.log(Math.floor(21.9)); //round down
//with negative numbers
console.log(Math.trunc(-10.6)); //round down

console.log(Math.floor(-10.3)); //round up

//Rounding decimals
console.log((2.7).toFixed(0)); //returns a string all the time
console.log((2.7).toFixed(3)); //cl = 2.700
//to convert it to number add a plus
console.log(+(2.7).toFixed(3)); //became a number

//Remainder operator is %
console.log('---Remainder operator----');
console.log(5 % 2);
console.log(5 / 2);

// function divide(num1, num2) {
//   if (num2 === 0) {
//     return 'not allowed';
//   }
//   return num1 / num2;
// }
// console.log(divide(2, 0));

// function count(alina) {
//   const a = alina.length;
// }

// console.log(a);

const isEven = n => n % 2 === 0;
console.log(isEven(524));

//back to APP
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements_row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'green';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//Date and Times

//const now = new Date();
// console.log(now);

//back to app
//fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
//Experimenting API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // or 'numeric', or '2-digit'
  weekday: 'long',
};
const locale = navigator.language; //instead of 'locale' could be used ('en-US')
labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  options
).format(now);
//setting the Date
//const now = new Date();

//Internationalizing numbers
console.log('----//Internationalizing numbers---');
const num = 3884764.23;
console.log('US:', new Intl.NumberFormat('en-US').format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE').format(num));

//setTimeout
console.log('---//setTimeout----');
