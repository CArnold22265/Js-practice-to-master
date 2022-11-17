'use strict';
//// primitive vs reference values...
/*
//STUDY
const flight = 'LH254';
const chris = {
  name: 'Christopher Arnold',
  passport: 23970976,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr' + ' ' + chris.name;

  passenger.passport === 23970976
    ? alert('check in!')
    : alert('wrong passport, shoot guy in the fucking head now!');
};

checkIn(flight, chris);

console.log(flight);
console.log(chris);
//As i suspected, the flight number above was unchanged after calling the functiion...
const NewPassenger = function (person) {
  person.passport = Math.trunc(Math.random() * 5000000000000);
};
//this time the passport number was indeed changed by the function, because
//we used person.passport which directly went into the object and changed it vs solely
//referencing it....

console.log(NewPassenger(chris));
console.log(chris);

checkIn(flight, chris);
*/
/////Functions ACCEPTING CALLBACK FUNCTIONS...
//STUDY
// const oneWord = function (str) {
//   str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUppercase(), ...others].join(' ');
// };

// //STUDY Higher order function
/*
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const highFive = function () {
  console.log('✋');
};
////SSTUDY these functions in the paramaters are callback functions and are very common in js
document.body.addEventListener('click', highFive);
['Jonas', 'Martha', 'Adam'].forEach(highFive);
*/
/*
let votesGD = 0;
let votesTS = 0;
const giantDouche = {
  name: 'Giant Douche',
  votecode: 'GD',
  votes: [],
  vote(name, grade) {
    console.log(
      `${name} grade-${grade} voted for ${this.name} ${this.votecode}`
    );
    this.votes.push(name);
  },
};

const turdSandwich = {
  name: 'Turd Sandwhich',
  votecode: 'TS',
  votes: [],
};
//// Setting const for the function to be binded to
const vote = giantDouche.vote;

////Setting vote functions as variables
const voteTS = vote.bind(turdSandwich);
const voteGD = giantDouche.vote;

////VOTES
voteTS('Butters stotch', 3);

//Final function calculates winner
// const calcVotes = function () {
//   votesGD > votesTS
//     ? console.log(`Turd sadwhich is victorious💩`)
//     : console.log('The Giant douche is the winner🗞');
// };
// calcVotes();

*/

//DEFAULT PARAMATERS
//STUDY
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //es5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
*/

//FUNCTIONS CALLING OTHER FUNCTIONS
//STUDY
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the Best!', upperFirstWord);
transformer('JavaScript is the Best!', oneWord);
const capFirstLetter = function (str) {
  const first = str.slice(0, 1).toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return first + rest;
};

const high5 = function () {
  console.log('🤚');
};
document.body.addEventListener('click', high5);
//in this example high5 is the callback function and addeventlistener is the higher order function..

transformer('a random ass string', capFirstLetter);
*/
////Functions returning other functions
//STUDY
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Chris');
greet('Hey')('Chris');
//Channing Tatum Practice!!
//STUDY //STUDY
*/
/*
let a = 0;

const suggest =
  'channing tatum is 1:unattractive, 2:slightly attractive 3:very handsome';

const p = function (str = 0) {
  return prompt(str);
};

const q = p(suggest);

const final = function (str) {
  if (str.includes('2' || '3')) {
    a += 1000;
  }
  a >= 2 ? console.log('you like the 🍆') : console.log('you like the 🦪');
};

//final(q);
*/

//Practice ex logging a random insult to the console
//STUDY //STUDY
/*
const insults1 = [
  'fucking',
  'cock-sucking',
  'cum-gargling',
  'pole-smoking',
  'fat ass',
];
const insults2 = [
  'retard',
  'shit-eater',
  'horse-fucker',
  'dog-rapist',
  'communist',
];
const insult = function (
  insult1 = insults1[Math.trunc(Math.random() * 4 + 1)],
  insult2 = insults2[Math.trunc(Math.random() * 4 + 1)]
) {
  return insult1 + ' ' + insult2;
};

const final = function (name, fn) {
  console.log(`${name} is a  ${fn()}`);
};
final('Gary', insult);
*/
///tHE CALL AND APPLY METHODS
//STUDY
/*
const southwest = {
  airline: 'Southwest',
  iataCode: 'SW',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
southwest.book(239, 'Christopher Arnold');
southwest.book(635, 'John Smith');
console.log(southwest);

//now assuming southwest created a new airline over time...
//take the book function from southwest, store in a variable so it can be reused keeping code dry
//does not work because the this keyword stored inside southwest will be undefined if called outside od
//the object, so we need to use call, apply or bind method

//const book = southwest.book; DOES NOT WORK

const northeast = {
  airline: 'NorthEast',
  iataCode: 'NE',
  bookings: [],
};

const frontier = {
  airline: 'Frontier',
  iataCode: 'FR',
  bookings: [],
};

//STUDY CALL METHOD FIRST ARGUMENT IS WHAT YOU WANT THIS. TO POINT TO
const book = southwest.book;
book.call(southwest, 237, 'Jane McJaney');
book.call(northeast, 237, 'Gary Johnson');
console.log(northeast);

//APPLY METHOD
//STUDY
//same as call method only difference is that it takes an array of flight data as an argument
const flightData = [583, 'George Cooper'];
book.apply(northeast, flightData);
//above is the same as below. its more common below, taking the flight data from an array and
//spreeading it into a call method
book.call(northeast, ...flightData);

//THE BIND METHOD
//STUDY
//bind method creates a new function which pulls the function and stores it in the function

// create a const holding the values of the function for each airline..
const bookSW = southwest.book;
const bookNE = book.bind(northeast);
const bookFR = book.bind(frontier);

//you can also set more specific values like creating a variable only for one flight num
const bookFR12 = book.bind(frontier, 12);
bookFR12('Mary Hadalamb');

//functions with event listeners..
//STUDY STUDY
southwest.planes = 300;
southwest.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', southwest.buyPlane.bind(southwest));

//PARTIAL APPLICATION FOR THE BIND METHOD - means we can pre set paramaters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addSales = addTax.bind(null, 0.23);
//above set the first paramater of .bind to null, because there is no .this keyword needed.. sets the
//default rate to .23, or 23%

console.log(addSales(100));
//same as above but with function returning another function...
const aT = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const sales = aT(0.23);
aT(100);
*/

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. 
This data is stored in the starter object below.
Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, 
  if the option is 3, increase the value AT POSITION 3 of the array by 1. 
  Make sure to check if the input is a number and if the number makes sense 
  (e.g answer 52 wouldn't make sense, right?)

  2. Call this method whenever the user clicks the "Answer poll" button.

  3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), 
which can be either 'string' or 'array'. If type is 'array', 
simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like 
"Poll results are 13, 2, 4, 1". 

  4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. 
Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! 
So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/
/*
//1.)
//mine
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer(type, fn) {
    let q = Number(
      prompt(`What is your favorite programming language?\n
  0: JavaScript \n
  1: Python \n
  2: Rust \n
  3: C++ \n
    `)
    );
    //const result = poll.answers;
    q >= 4 || NaN || undefined
      ? alert('ANSWER INVALID⛔️, please refresh!')
      : this.answers[q]++;
  },
};

//Jonas


const question = poll.registerNewAnswer;

const display = poll.displayResults;
console.log(display);

//2.)
document.querySelector('.poll').addEventListener('click', question.bind(poll));

//3.)
//console.log(variable1.constructor == Array);

poll.displayResults = function (type) {
  type.constructor == Array
    ? console.log(`${type}`)
    : console.log(`poll results are ${type}`);
};

// poll.displayResults([3, 4, 5, 6]);
// poll.displayResults('3, 4, 5, 6');
//4 IS FUCKING HAAARRRDDDD

const f = function(pin) {
  return console.log(pin.length === 4 || pin.length === 6 || pin.type);
}
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register answer
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
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

*/

//IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSIONS...
//STUDY
//IIFE expresstion
/*
(function () {
  console.log('this is an IIFE and will never run again...');
})();
//IIFE ARROW...
(() => console.log('this will also never run again'))();
*/

////MODIFY CSS STYLES ON CLICK EVENT LISTENER...
////STUDY STUDY
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

(function () {
  const colorArr = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];
  const colorChange = function () {
    const color = colorArr[Math.trunc(Math.random() * 6 + 1)];
    return color;
  };
  const button = document.querySelector('button');
  button.style.backgroundColor = 'white';
  button.addEventListener('click', function () {
    button.style.backgroundColor = colorChange();
  });
})();
*/

/*
const minMax = function (arr) {
  const newArr = arr.sort();
  const finalArr = [newArr[0], newArr[arr.length - 1]];

  if (arr.length === 1) {
    return [arr[0], arr[0]];
  } else {
    return finalArr;
  }
};
console.log(minMax([15, 1, 32, 108, 42, 35, 462]));
console.log(minMax([2, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
*/

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
/*
1.) split each letter into an array
2.) return a new array that does not contain the current element
*/
/*
The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in the 
original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
// BUG

let finalArr = [];
const checkChar = function (word) {
  let arr = word.toLowerCase().split('');
  let newArr = [];

  arr.forEach(function (element, index, array) {
    if (index === 0) {
      newArr = array.slice(1, arr.length);
      console.log(array, newArr);
      if (newArr.includes(element)) {
        finalArr.push(')');
      } else {
        finalArr.push('(');
      }
    } else if (index === arr.length - 1) {
      arr = word.toLowerCase().split('');
      newArr = arr.slice(0, arr.length - 1);
      console.log(arr, newArr);
      if (newArr.includes(element)) {
        finalArr.push(')');
      } else {
        finalArr.push('(');
      }
    } else if (index === 1) {
      arr = word.toLowerCase().split('');
      const rest = arr.slice(2, arr.length);
      newArr = [array[0], ...rest];
      console.log(array, newArr);
      newArr.includes(element) ? finalArr.push(')') : finalArr.push('(');
    } else {
      arr = word.toLowerCase().split('');
      const first = [...arr.slice(0, index--)];
      const resty = [...arr.slice(index + 2, arr.length)];
      newArr = first.concat(resty);
      console.log(arr, newArr);
      if (newArr.includes(element)) {
        finalArr.push(')');
      } else {
        finalArr.push('(');
      }
    }
  });
  return finalArr.join().replace(/,/g, '');
};

// checkChar('alas');
//console.log(checkChar('stringg'));
console.log(checkChar('Success'));
// checkChar('wordsalads');

//console.log('a w o r d'.replaceAll(/ /g, ''));

// console.log(checkChar('word'));
// console.log(checkChar('a random ass string'));
// console.log(str.replace(str.at(0), ''));

// for (let i = arr[0]; i <= arr.length - 1; i++) {
//   let arr2 = arr.slice(i);
//   if (arr2.includes(i)) {
//     a.push(')');
//     return console.log(a);
//   } else {
//     a.push('(');
//     return console.log(a);
//   }
