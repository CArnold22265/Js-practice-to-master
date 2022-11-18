'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
const initialsArr = [];
const user = 'Steven Thomas Williams'; //stw

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

calcDisplayBalance(account1);

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
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1);

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(v => v[0])
      .join('');
  });
};
createUserName(accounts);

////////// EVENT HANDLERS
//STUDY

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display message and ui
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginPin.value = inputLoginUsername.value = 0;
    inputLoginPin.blur();

    //display movements
    displayMovements(currentAccount.movements);
    //display balance
    calcDisplayBalance(currentAccount.movements);
    //display summary
    calcDisplaySummary(currentAccount);
  }
});

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `movement ${i + 1}: You just ${
//       mov > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(mov)}`
// );
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
////SLICE METHOD
//STUDY
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(3));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // creates shallow copy...

//////////////////////////////////////////////////
////SPLICE METHOD
//STUDY
//console.log(arr.splice(3)); //same as slice, but mutates original arr
//console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); //arr.splice(starting position, #of items to be deleted...)
console.log(arr);

////ARRAY REVERSE METHOD
//STUDY
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse()); //['j', 'g', 'h', 'i', 'j']
console.log(arr2); // also mutated original array and reversed it as well...

////CONCAT METHOD
//STUDY
const letters = arr.concat(arr2);
console.log(letters); //concatenated both arrays
console.log([...arr, ...arr2]); // same as above...

////JOIN METHOD
//STUDY
console.log(letters.join(' - ')); //seperated each array item with space-space
*/

//////ARRAY AT METHOD
//STUDY
/*
const arr = [23, 11, 64];
console.log(arr[0]); //23
console.log(arr.at(0)); //23
////Getting last element with tarditional methods
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); //64
////using at method...
console.log(arr.at(-1)); //64
console.log('Christopher'.at(0)); //C
*/

////LOOPING ARRAYS FOR EACH
//STUDY
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//FOR OF LOOP....
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement${i + 1}: You just deposited ${movement}`);
  } else {
    console.log(`Movement${i + 1}: You just withdrew ${Math.abs(movement)}`);
  }
}
//USING FOR EACH METHOD ACIEVES SAME THING IN AN EASIER WAY...
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement${i + 1}: You just deposited ${mov}`);
  } else {
    console.log(`Movement${i + 1}: You just withdrew ${Math.abs(mov)}`);
  }
});
*/

////Looping through maps and sets.
//STUDY
//// with map
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//// with set
//STUDY
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${key}: ${value}`);
});
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs.
So each of them asked 5 dog owners about their dog's age,
and stored the data into an array (one array for each).
 For now, they are just interested in knowing whether a dog is an adult or a puppy.
  A dog is an adult if it is at least 3 years old,
  and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats,
not dogs! So create a shallow copy of Julia's array,
and remove the cat ages from that copied array
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult
("Dog number 1 is an adult, and is 5 years old") or a puppy
("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
/*
const juliaArr1 = [3, 5, 2, 12, 7];
const juliaArr2 = [9, 16, 6, 8, 3];
const kateArr1 = [4, 1, 15, 8, 3];
const kateArr2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const allDogs = dogsJulia.slice(1, -2).concat(dogsKate);
  console.log(allDogs);
  allDogs.forEach(function (age, i, arr) {
    console.log(
      age <= 3
        ? `Dog number ${i + 1} is still a puppy`
        : `dog number ${i + 1} is an adult and is ${age} years old!`
    );
  });
};
checkDogs(juliaArr1, kateArr1);
checkDogs(juliaArr2, kateArr2);
*/
/*
////STUDY STUDY
const namesProper = function (arr) {
  const names = [];
  arr.forEach(function (str) {
    const name = str.toLowerCase().split('');
    const namesArr = name.at(0).toUpperCase() + name.slice(1, name.length);
    names.push(String(namesArr).replace(/,/g, ''));
    console.log(names);
  });
};

namesProper(['gArY', 'StEVEN', 'mARy', 'caRoLINe']);
namesProper(['spongEBOB', 'SAndy', 'PaTRIk', 'SQUIdwARD']);
*/
/*
function areYouPlayingBanjo(name) {
  return String(name[0]).includes('R') || String(name[0]).includes('r')
    ? name + ' plays banjo'
    : name + ' does not play banjo';
}
console.log(areYouPlayingBanjo('ADAM'));
console.log(areYouPlayingBanjo('ROBERT'));
console.log(areYouPlayingBanjo('rOBERT'));
*/

////ARRAY MAP METHOD...
// STUDY

// const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//FUNCTION EXPRESSION USING MAP METHOD
//STUDY
// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

//ARROW FUNCTION USING MAP METHOD...so lame
/*
const movementsUsd = movements.map(mov => mov * 1.1);
console.log(movementsUsd);

//STUDY FOR LOOP JUST FOR THE FUCK OF IT
const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * 1.1);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `movement ${i + 1}: You just ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`
);

console.log(movementsDescriptions);
*/

/*
const grams = [16, 3.5, 8, 2];
const gToOz = 28.34;

//cOOL FUNCTION
const convGrToOz = grams.map(function (g) {
  return g * gToOz;
});

//SUPER LAME ARROW FUNCTION
const convGrToOzArrow = grams.map(g => g * gToOz);

console.log(convGrToOz);
console.log(convGrToOzArrow);
*/
//STUDY
/*
console.log(movements);
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

//FIND MAX VALUE OF AN ARRAY
//STUDY
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
*/
///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs.
This time, they want to convert dog ages to human ages and
calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages
('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula:
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old
(which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs
(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
//STUDY
/*
const testOne = [5, 2, 4, 1, 15, 8, 3];
const testTwo = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  //1
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  //2
  const excludePuppies = humanAges.filter(humAge => humAge > 18);

  //3
  console.log(excludePuppies);
  //36, 32, 76, 48, 28
  return excludePuppies.reduce((acc, cur) => acc + cur) / excludePuppies.length;
};

console.log(calcAverageHumanAge(testOne));
console.log(calcAverageHumanAge(testTwo));
//reduce((a, b) => a + b) / array.length
*/

//WE WANT TO TAKE ALL OF THE MOVEMENT DEPOSITS,
//CONVERT THEM FROM EUR TO USD, AND THEN ADD THEM ALL UP

////Chaining multiple array methods together
//STUDY
//pipeline
/*
const eurToUsd = 1.1;
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUsd);
*/

//////////
//CODING CHALLENGE #2 STUDY
//IMPLIMENT CHAINING TO SOLVE THE FOLLOWING CHALLENGE...
/*
Julia and Kate are doing a study on dogs.
So each of them asked 5 dog owners about their dog's age,
and stored the data into an array (one array for each).
 For now, they are just interested in knowing whether a dog is an adult or a puppy.
  A dog is an adult if it is at least 3 years old,
  and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats,
not dogs! So create a shallow copy of Julia's array,
and remove the cat ages from that copied array
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult
("Dog number 1 is an adult, and is 5 years old") or a puppy
("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
/*
const juliaTest1 = [3, 5, 2, 12, 7];
const juliaTest2 = [9, 16, 6, 8, 3];
const kateTest1 = [4, 1, 15, 8, 3];
const kateTest2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  return dogsJulia
    .slice(1, -2)
    .concat(dogsKate)
    .map((dog, i, arr) => {
      dog <= 3
        ? console.log(`dog number ${i + 1} is still a puppy`)
        : console.log(
            `dog number ${i + 1} is an adult, and is ${dog} years old`
          );
    });
};
*/

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  acc.owner === 'Jessica Davis' ? console.log(acc) : '';
}
