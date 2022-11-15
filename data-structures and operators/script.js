'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
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
  },
};
*/
////LESSON ON DESTRUCTURING ARRAYS STUDY
//RETRIEVE ELEMENTS FORM AN ARRAY AND STORE THEM INTO A VARIABLE IN A VERY EASY WAY//
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// //with destructuring we can declare all three variables at the same time.
// const [x, y, z] = arr;
// //generates const x=2 const y = 3 const z=4
// console.log(x, y, z);

//const [first, second] = restaurant.categories;
//generates const first = italian; const second=pizzeria
//console.log(first, second);
//const [first, , second] = restaurant.categories;
//generates
//const first = italian; const second = vegetarian
//console.log(first, second);

//shows in console Italian Vegetarian
//to reassign the variables by switching them
//[main, secondary] = [secondary, main];
//console.log(main, secondary);
//shows in console vegetarian italian
//you can have a function return an array, and immediately deconstruct the array into variables..
//which allows you to return multiple values from a function
//making a function to order food
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant.order(2, 0));
//shows garlic bread, pizza
//restructure as array..
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
//generated two seperate values starter = garlic bread, main = pizza
//using nested arrray
const nested = [2, 4, [5, 6]];
//say i wanted to make the first, third and fourth item into variables i, j, k..
const [i, , [j, k]] = nested;
console.log(i, j, k);
//shows (2,5,6) so created const i =2, j=5, k = 6..

//default values
//each element(p,q,r) are given a default value of 0 so if the array does not contain an
//element in its position, the variable will retain the default value instead..
const [p = 0, q = 0, r = 0] = [8, 9];
console.log(p, q, r);
//shows(8,9,0)
*/
///////DESTRUCTURING OBJECTS
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openingHours, categories } = restaurant;
//created 3 new variables based on the restaurant object
console.log(name);
//showed classico italiano
//lets say we want the variable names to be different from the property nmames...

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name);
//showed classico italiano

const { menu = [], starterMenu: starters = [] } = restaurant;
//if there is no menu: in the object it will have a blank value,
//starterMenu value will be stored in a const variable named starters, if there is no
//starter menu, a variable named starters will have an empty value stored for it

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// we want a to go from 111, t 23, and b to go form 997 to 7....
({ a, b } = obj);
console.log(a, b);
//showed (23,7)

//dealing with nested oblects
// we will create two variables, open and close which will contain the open and
//closing times for the restaurant on friday....
// const { fri } = openingHours;
// console.log(fri);
//showed {open: 11, close: 23}

//how to get variables for open and close
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
//showed(11,23)
*/
/////practicing so i dont get lost
/*
const jobApplication = {
  firstName: 'christopher',
  lastName: 'Arnold',
  birthYear: 1988,
  yearsExperience: 13,
  skills: ['knife skills', 'attention to detai', 'butchery', 'pasta making'],
  desiredPay: 20,
  jobHistory: {
    frasca: 'cook 2 years',
    bellwether: 'cook 6 months',
    acero: 'sous chef 1 year',
  },
};

//provide the variable names that exactly match the property names we want to retrieve
//from the object
//const { lastName, firstName, yearsExperience } = jobApplication;
//console.log(firstName, lastName, yearsExperience);
//make the variable names different from the property names..
//=[] is an empty default valiue given in case the object doesnt have a property listed by that name
const {
  lastName: last = [],
  firstName: first = [],
  yearsExperience: exp = [],
  currentPay = [],
} = jobApplication;
console.log(last, first, exp, currentPay);
//currentpay was given aan empty default value to refer to in case the object didnt contain a property by that name.
//destructure object within an object nested objects
const {
  jobHistory: { acero: job1, bellwether: job2 },
} = jobApplication;
//created const job1 = 'sous chef 1 year'; const job2='cook 6 months'
console.log;
*/
/*
///////////////////////////////////////////////////
//the spread operator//
const arr = [7, 8, 9];
//lets say we wanted to create a new array out of this with other elements added
//to the beginning
//bad method to add 1 and 2 to the array
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
//better way to do it is by using the spread operator
const newArray = [1, 2, ...arr];
console.log(newArray);
// ...arr took all of the elements from arr and wrote them individually [1,2,7,8,9]
//use spread operator whenever you ould need to write all items seperated by commas
//two important uses of arrays is to create shallow copies of arrays, and to
//merge two arrays together

//copy array
const jobApplication = {
  firstName: 'christopher',
  lastName: 'Arnold',
  birthYear: 1988,
  yearsExperience: 13,
  skills: ['knife skills', 'attention to detai', 'butchery', 'pasta making'],
  stations: ['grill', 'saute', 'garde-manger'],
  desiredPay: 20,
  jobHistory: {
    frasca: 'cook 2 years',
    bellwether: 'cook 6 months',
    acero: 'sous chef 1 year',
  },
};

//created a shallow copy of skills above..
const skillsCopy = [...jobApplication.skills];
//join two arrays together
const skillsStations = [...jobApplication.skills, ...jobApplication.stations];
console.log(skillsStations);

//iterables are arrays strings maps, and sets, but not objects
//spead operator works on all iterables..
const name = 'chris';
console.log(...name); //showed c h r i s
//create a new job application object with all of the old elements, plus new ones..

const newApplication = { ...jobApplication, email: 'carnold22265@gmail.com' };
console.log(newApplication.email);

////////////////////////
//rest pattern and paramaters
//rest pattern unpacks multiple items to condense them into an array..
//rest because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // showed: 1 2 (3) [3, 4, 5]
// use the rest operator to create a function that adds all numbers inputted together

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3, 4);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x);

//convert oz to g

//result of || doesnt always have to be boolean
//logical operators can use any data type, can return any data type
//and they use short-circuiting ex:
console.log(3 || 'chris');
//if the first operator is true, the second one wont be selected
console.log(3 > 4 || 'chris');
//showed chris because 3 is not less than 4...

//if theres a category on job application of currentPay, disply it
//if not display 15 as a default value
let pay = jobApplication.currentPay || 15;
console.log(pay); //showed 15
jobApplication.currentPay = 25; //if moved above variable declaration cl would show 25
console.log(pay);
// && operator short circuit
//&&operator returns first falsey value || shortcircuits when first operator is true

///////////////////LOGICAL assignment operators es2021///////////
const rest1 = {
  name: 'Indo',
  //numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'city wok',
  owner: 'oriental woman',
};
//we want to set a default number of guests for all of the restauraunts that dont have
//a numguests property...
//with || operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//STUDY///or assignment operator
// console.log(rest1);
// console.log(rest2);
//rest2 didnt have anumber of guests so it was given a default value of 10
//rewrite using ||assignment operator
// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;
// console.log(rest2); // gave a default value of 10 and added it to the object numGuests: 10

//STUDY nullish assignment operator: when || short circuit, if numguests = 0 it returns
//the default value because 0 is falsey. so nullish assignment works because it allows 0
//or empty '' to be returned as truthy values
rest2.numGuests ??= 10;
rest1.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

//STUDY && assignment operator assigns a new value if the current one is truthy
rest2.numGuests &&= 'Anonymous';
rest1.numGuests &&= 'Anonymous';
console.log(rest1);
console.log(rest2);
*/
//practice
//DESTRUCTURE ARRAY
/* STUDY
const dataArr = [23, 123, 1234];
const [d1, d2, d3] = dataArr;
console.log(d1, d2, d3);
*/

//Destr array, skip item 2
/*STUDY
const dataArr = [23, 123, 1234];
const [d1, , d2] = dataArr;
console.log(d1, d2);
*/

//destr array from object
/* STUDY
const obj = {
  name: 'dragonson',
  profession: 'cheekClapper',
  flaws: ['relatability', 'patience', 'over-confidence'],
};
const [f1, f2, f3] = obj.flaws;
console.log(f1, f3, f2);
*/

//REASSIGNING VALUES OF ARRAY VARIABLES(MUTATING VARIABLES..)
/* STUDY
const obj = {
  name: 'dragonson',
  profession: 'cheekClapper',
  flaws: ['relatability', 'patience', 'over-confidence'],
};
let [flawMain, flawSecondary] = obj.flaws;
console.log(flawMain, flawSecondary); //(relatability, patience)
[flawSecondary, flawMain] = [flawMain, flawSecondary];
console.log(flawMain, flawSecondary); //(patience, relatability)
*/

//Using ARRAY DECONSTR TO HAVE A FUNCTION RETURN MULTIPLE VARIABLES
/* STUDY
const obj = {
  name: 'dragonson',
  profession: 'cheekClapper',
  strengths: ['work ethic', 'driven', 'attention to detai'],
  weaknesses: ['relatability', 'patience', 'over-confidence'],

  posAndNeg: function (strIndex, weaIndex) {
    return [this.strengths[strIndex], this.weaknesses[weaIndex]];
  },
};

console.log(obj.posAndNeg(1, 2)); //('driven', over-confidence);
*/

//DECONSTRUCTING A NESTED ARRAY...
/* STUDY
//extract first value, and nested array in variables
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); //((2) [5,6])
*/

//CREATE VARIABLES FOR ALL VALUES IN NESTED ARRAY
/* STUDY
const nested = [2, 3, [4, 5]];
const [a, b, [c, d]] = nested;
console.log(a, b, c, d); //2 3 4 5
*/

//SETTING DEFAULT VALUES ON AN DESTRUCTURED ARRAY
/* STUDY
const [p = 0, q = 0, r = 0] = [8, 9];
console.log(p, q, r); //showed 8 9 0
*/

//DESTRUCTURING OBJECTS
/* STUDY
const obj = {
  name: 'dragonson',
  profession: 'cheekClapper',
  strengths: ['work ethic', 'driven', 'attention to detai'],
  weaknesses: ['relatability', 'patience', 'over-confidence'],

  posAndNeg: function (strIndex, weaIndex) {
    return [this.strengths[strIndex], this.weaknesses[weaIndex]];
  },
};

const { name, strengths, weaknesses } = obj;
//make variable names different from property names.........
const { name: nickName, strengths: positives, weaknesses: negatives } = obj;
console.log(nickName, positives, negatives);
*/

//GIVE DEFAULT VALUES AND CHANGE NAME OF DECONSTR OBJ VALUES...
/* STUDY
const obj = {
  name: 'dragonson',
  profession: 'cheekClapper',
  strengths: ['work ethic', 'driven', 'attention to detai'],
  weaknesses: ['relatability', 'patience', 'over-confidence'],
};

const {
  name: nickname = [],
  strengths: str = [],
  weaknesses: wea = [],
  age = [],
} = obj;
console.log(nickname, str, wea, age);
//dragonson (3) ['work ethic', 'driven', 'attention to detai'] (3) ['relatability', 'patience', 'over-confidence']0: "relatability"1: "patience"2: "over-confidence"length: 3[[Prototype]]: Array(0) []
*/

//MUTATING VARIABLES WHILE DESTRUCTURING OBJECTS...
/* STUDY
let a = 111;
let b = 999;
const obj = { a: 22, b: 44, c: 51 };
({ a, b } = obj);
console.log(a, b); //(22,44)
*/

//NESTED OBJECTS
/* STUDY
const obj = {
  name: 'dragonson',
  profession: 'cheekClapper',
  strengths: ['work ethic', 'driven', 'attention to detai'],
  weaknesses: ['relatability', 'patience', 'over-confidence'],
  availability: {
    monday: {
      from: 9,
      to: 5,
    },
    tuesday: {
      from: 6,
      to: 12,
    },
    wednesday: {
      from: 2,
      to: 10,
    },
  },
};
const { availability: avail } = obj;

const {
  monday: { from: f, to: t },
} = avail;
console.log(f, t); //9 5
*/

//SPREAD OPERATOR ON ARRAY
/* STUDY
//only use it when you would otherwise write array items separated by commas, or need a new array.

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr); //[1,2,7,8,9]
console.log(...newArr); // 1 2 7 8 9
*/

//SPREAD OPERATOR ON AN OBJECT...
/* STUDY
const obj = {
  name: 'chris',
  profession: 'unemployed',
  birthyear: 1988,
};

const newObj = { ...obj, age: 34, skills: ['detail', 'knife', 'fucus'] };
console.log(newObj); // added new props to obj stored in new obj
*/

//REST OPERATOR
/* STUDY
const j = [3, 4];
const arr = [1, 2, ...j];
console.log(arr); //[1,2,3,4]

const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(others); //[3,4,5,6,7,8]
*/

// SHORT CIRCUITING ||  SHORT CIRCUITS WHEN THE  FIRST OPERATOR IS TRUE
/* STUDY
console.log(3 || 'chris'); //3
console.log('' || 'chris'); //chris
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(undefined || '' || 'hello'); // 'hello'
*/

//SHORT CIRCUITING && SHORT CIRCUITS ON FIRST FALSEY OPERATOR
/* STUDY
console.log(3 && 'CHRIS');   //CHRIS
console.log(7 && 'CHRIS');  //CHRIS
console.log('HELLO' && 23 && null && 'CHRIS'); //NULL
*/

//NULLISH COALLESCING OPERATOR
/* STUDY
const sum = 0;
const a = sum || 10; //10
console.log(a);
//0 is falsey, so it wont give you the var sum, so use nco to mitigate 0 being falsey..
const aCorrect = sum ?? 10;
console.log(aCorrect); // 0
*/

//LOGICAL ASSIGNMENT OPERATOR
/* STUDY
const rest1 = {
  name: 'the spot',
  founded: 1994,
};

const rest2 = {
  name: 'feed fat fucks',
  owner: 'tommy',
};
rest1.owner ??= 'some guy'; //logical nullish assign operator
console.log(rest1.owner); //some guy
*/

///////////////////////SECTION//////////////////////////

//FOR OF LOOP
/* STUDY
const obj = {
  name: 'dragonson',
  profession: 'cheekClapper',
  strengths: ['work ethic', 'driven', 'attention to detai'],
  weaknesses: ['relatability', 'patience', 'over-confidence'],
};

const sw = [...obj.strengths, ...obj.weaknesses];
console.log(sw);
for (const item of sw) console.log(item);

*/

//ENHANCED OBJECT LITERALS

//first method can add one object as a property of another object
/* STUDY
const years = {
  birth: 1988,
  favorite: 1776,
  memorable: 2003,
};
const resume = {
  firstName: 'Christopher',
  lastName: 'Arnold',
  years,
};

console.log(resume); //showed years object was added to resume...
*/

/* STUDY 
//SECOND METHOD HAS EASIER SYNTAX FOR ADDING A FUNCTION AS A PROPERTY OF AN OBJECT..
//old way, pre es6...
// const restaurant = {
//   name: 'Some PLace',
//   owner: 'some dude',
//   props: function (obj) {
//     console.log(...obj);
//   },
// };

//New way
const restaurant = {
  name: 'Some PLace',
  owner: 'some dude',
  props(obj) {
    console.log(...obj);
  },
};
*/

//Third compute property names instead of doing it manually
/* STUDY
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const availablitity = {
  [weekdays[3]]: {
    from: 10,
    to: 4,
  },
  [weekdays[4]]: {
    from: 8,
    to: 5,
  },
  [weekdays[ 2 + 3 ]]: {
    from: 7,
    to: 12,
  },
};
console.log(availablitity); // showed thu, fri, sat
*/

/////////////////////////SECTION///////////////

//OPTIONAL CHAINING
/* STUDY
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const availablitity = {
  [weekdays[3]]: {
    from: 10,
    to: 4,
  },
  [weekdays[4]]: {
    from: 8,
    to: 5,
  },
  [weekdays[2 + 3]]: {
    from: 7,
    to: 12,
  },
};
///starts here....

console.log(availablitity.thu?.from, availablitity.sun?.from); // 10 undefined
//only if the previous property exists, the following one will be read. 
//if doesnt exist, undefined will be returned...
*/
// LOOP OVER ARRAY AND LOG TO CONSOLE WHETHER CHRIS HAS AVAILABILITY ON GIVEN DAY...
//STUDY
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const availablitity = {
  [weekdays[3]]: {
    from: 10,
    to: 4,
  },
  [weekdays[4]]: {
    from: 8,
    to: 5,
  },
  [weekdays[2 + 3]]: {
    from: 7,
    to: 12,
  },
  saturday(day) {
    day <= 14 ? 10 : 'na';
    return this.from;
  },
};

for (const day of weekdays) {
  //console.log(day);
  const from = availablitity[day]?.from ?? `im not available on ${day}`;
  console.log(`on ${day} i cant be reached after ${from}`);
}

//CHECK IF A METHOD ACTUALLY EXISTS BEFORE CALLING IT

console.log(availablitity.saturday?.(13) ?? 'method does not exist');
*/

//use optional chaining to check if an array is empty...
/* STUDY
const person = [{ name: 'chris', age: 34, nickName: 'dragon' }];
console.log(person[0]?.name ?? 'array is empty');
*/

////////NEW SECTION //////////////////////////////////////////////

//JS CLASSES
//STUDY
/*
class Person {
  constructor() {
    this.name = 'max';
    this.dick = 9;
  }
  printMyName() {
    console.log(this.name);
  }
  printMyCock() {
    console.log(this.dick);
  }
}
const person = new Person();
person.printMyName(); //max
person.printMyCock(); // 9 
*/

//JS CLASSES INHERIT OTHER CLASSES
/* STUDY
class Human {
  constructor() {
    this.gender = 'male';
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'max';
  }
  printMyName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName(); //max
person.printGender(); //male
*/

//MODERN SYNTAX VS OLD SYNTAX
/* STUDY
//OLD, SEE ABOVE...
//MODERN..
class Human {
  gender = 'male';
  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = 'max';
  gender = 'female';

  printMyName = () => {
    console.log(this.name);
  };
}
Person.printGender();
person.printMyName();
*/

/// Spread Operator Syntax on Array
/* STUDY
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
console.log(newArr);
*/

///Spread operator syntax on object
// STUDY
/*
const person = {
  firstName: 'Chris',
  lastName: 'Arnold',
};

const newPerson = {
  ...person,
  age: 34,
};
console.log(newPerson.firstName); //chris
*/
//Primitive vs reference
/* STUDY
const obj = {
  name: 'dragoon',
  age: 34,
};
const obj2 = obj;

obj.age = 50;
console.log(obj2); //50 even though we only changed age on obj, obj2 age was still 50,
//could cause bugs later, better to use spread operator and make a legit copy, see below

const obj3 = {
  ...obj,
};
console.log(obj3.agey6t7tf);
*/

////ARRAY MAP ARROW FUNCTION
/* STUDY
const nums = [2, 5, 7, 16];
const doubleNums = nums.map(num => {
  return num * 2;
});
console.log(doubleNums); // [4,10,14,32]
*/

///////SECTION///////
/*
////SET SYNTAX
//STUDY
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //(Pasta, 'Pizza', 'Risotto')
console.log(new Set('CCHHRRIISS')); // ('C','H','R','I','S')

////GET SIZE OF A SET
//STUDY
console.log(ordersSet.size); //3
////CHECK IF AN ITEM IS IN A SET
//STUDY
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
////ADD NEW ELEMENTS TO A SET
// STUDY
ordersSet.add('garlic Bread');
console.log(ordersSet); //{'Pasta', 'Pizza', 'Risotto', 'garlic Bread'}
////Delete Elements from a set
//STUDY
ordersSet.delete('Risotto');
console.log(ordersSet);
////Loop OVER A SET
//STUDY
for (const order of ordersSet) console.log(order);

/////BIG USE CASE FOR SETS IS TO REMOVE DUPLICATES OF ITEMS THAT ARE IN ARRAYS
//STUDY
const restaurant = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staff = [...new Set(restaurant)]; //'Waiter', 'chef', 'manager']]
console.log(staff); // {waiter, chef, manager}

//PRACTICE
const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
const arrSet = [...new Set(arr)];

console.log(arrSet); /// [1,2,3,4]

////SEE how many letters are in a string
console.log(new Set('christopherArnold').size); //13
*/
//////////////////SECTION////MAPS////////////////

//MAP SYNTAX & check size
//STUDY
/*
const rest = new Map();
rest.set('name', 'Classico Italiano'); //first value:key name, second: value
rest.set(1, 'Firenze, Italy');
rest.set(2, 'LIsbon, Portugal');
console.log(rest); //
console.log(rest.size); //
*/
//CALLING THE SET METHOD ALLOWS US TO CHAIN MULTIPLE SETS
/* STUDY
rest
  .set('categories', ['italian', 'Pizzeria', 'vegetarian', 'organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open 😁')
  .set(false, 'we are closed 🥲');

//READING DATA FROM THE MAP USING THE GET METHOD
//STUDY
console.log(rest.get('name')); // CLassico Italiano
console.log(rest.get(true)); //We are open
console.log(rest.get(1)); //We are open
*/
/*
//USING BOOLEAN VALUES TO OUR ADVANTAGE..
//STUDY
const time = 21;
const theseHands = new Map();
theseHands
  .set('firstname', 'these')
  .set('lastnName', 'hands')
  .set('open', 0)
  .set('close', 24)
  .set(true, 'you can get these fuckin hands✋🤚')
  .set(false, 'no my friend, you can not get these hands right now.');
console.log(theseHands);
console.log(
  theseHands.get(
    time < theseHands.get('close') && time > theseHands.get('open')
  )
);
//not common syntax, just showing the power of maps
/*
/*
/////CHECK IF A MAP CONTAINS A CERTAIN KEY
//STUDY
console.log(theseHands.has('open')); //true
//STUDY//DELETE AN ITEM IN A MAP
theseHands.delete('close');
console.log(theseHands); //close is deleted
//STUDY//CHECK SIZE OF A MAP
console.log(theseHands.size); //5
//STUDY//CLEAR ALL ITEMS FROM A MAP
//theseHands.clear();
//console.log(theseHands); //EMPTY

//HOW TO USE ARRAYS OF OBJECTS AS MAP KEYS
//STUDY//
const arr = [1, 2];
theseHands.set(arr, 'Test');
console.log(theseHands.get(arr));
//
//STUDY///////
//Storing dom elements in A MAP
theseHands.set(document.querySelector('h1'), 'Heading');
console.log(theseHands);
*/

//POPULATING A NEW MAP WITHOUT USING THE SET METHOD
//STUDY
/*
const question = new Map([
  ['question', 'Which language is the best codingn language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again '],
]);
console.log(question);

//CONVERT OBJECT TO MAP
//STUDY
const openingHours = {
  mon: 11,
  tue: 12,
  wed: 22,
  thu: 12,
  fri: 10,
};

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//USING A FOR LOOP ON A MAP
//STUDY STUDY
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}
////Getting answer from user using boolean
const answer = Number(prompt('Your answer'));
console.log(question.get(answer === 3));

////Convert a map back into an array
//STUDY
const newArr = [...question];
console.log(newArr); //same as console.log(...question)

////USING ENTRIES KEYS VALUES ON MAPS
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/
/*
const question = new Map([
  ['question', 'Which Programming language is superior?'],
  [1, 'c'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'wrong answer, fuckface💩'],
]);
const answer = Number(
  prompt(
    'which programming language is the best, 1. c, 2. python, 3. JavaScript?'
  )
);
console.log(question.get(question.get('correct') === answer));
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/
/*
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

//1.)

const events = [new Set([...gameEvents.values()])];
console.log(events);

//2.)
gameEvents.delete(64);

//3.)
const lengthByEvent = function (map) {
  const often = 90 / map.size;
  return console.log(`an event happened on average every ${often} minutes`);
};
lengthByEvent(gameEvents);
//4.)
/* My solution not bad, gonna rewrite using ternary operator and a variable for the half
for (const [key, value] of gameEvents) {
  if (key < 45) console.log(`['FIRST HALF'], ${key} : ${value}`);
  else {
    console.log(`['SECOND HALF'], ${key} : ${value}`);
  }
}
*/
/*
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min} : ${event} `);
}
&/
//if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
*/

///////////////////////SECTION///////STRINGS/////////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
//STUDY
// get the letter of a string based off of its position
console.log(plane[0]); //A
console.log(plane[1]); //3.... etc
//STUDY
//GET LENGTH PROPERTY OF A STRING
console.log(plane.length); //4
console.log('test string'.length); //11
//STUDY
// INDEX OF STRING METHOD tells you the first position of a string that a character is placed at...
console.log(airline.indexOf('A')); //6
//STUDY
//LAST INDEXOF METHOD TELLS YOU THE LAST POSITION OF A STRING THAT A CHARACHTER IS PLACED AT...
//STUDY
console.log('tester string'.lastIndexOf('e')); //4
console.log('tester string g374e'.lastIndexOf('e')); //18
//STUDY
//using index of to text for individual words... IS CASE SENSITIVE
const bike = 'I like to ride my bike. Riding my bike is fun';
console.log(bike.indexOf('bike')); //18
console.log(bike.lastIndexOf('bike')); //34

//STUDY
//EXTRACT PART OF A STRING USING THE SLICE METHOD..
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(8)); // Portugal
console.log(airline.slice(airline.indexOf('A'))); //AP AIR PORTUGAL USED INDEX OF AS ARGUMENT TO RETURN STRING POS #
//STUDY
//EXTRACT PART OF A STRING USING A BEGINNING AND END PARAMATER...
console.log(airline.slice(4, 8)); // air     returned charachters 4 - 8 length = end - beginning (8-4)
//STUDY
//EXTRACT FIRST OR LAST WORD OF A STRING USING THE SLICE METHOD...

//FIRST
console.log(airline.slice(0, airline.indexOf(' '))); //tap
//LAST
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //portugal

//STUDY
//HOW TO USE A - ARGUMENT TO SLICE FROM THE END OF A VARIABLE
console.log(airline.slice(-4)); //ugal
console.log(airline.slice(1, -3)); //AP Air Portu

///practice
const checkMiddleSeat = function (seat) {
  //B and E are the middle seats
  Number(seat.indexOf('E') > 0) || Number(seat.indexOf('B') > 0)
    ? console.log('you have a middle seat')
    : console.log('you do not have a middle seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// more practice extracting part of a string
//creating a function that loops over a map and extracts the last 3 letters of every value and puts in new array
let arr = [];
const mappy = new Map([
  [1, 'some text'],
  [2, 'some words about stuff'],
  [3, 'last string is just some more words'],
]);
console.log(mappy);

for (const [index, value] of mappy) {
  arr.push(value.slice(-3));
}
console.log(arr); // ['ext', 'uff', 'rds' ]
*/

//////MORE STRING METHODS
//CHANGING THE CASE OF A STRING
/*
//STUDY
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
//CALLING UPPER OR LOWERCASE TO FIX CAPITALIZATION IN A NAME..
//STUDY
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerFix = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerFix); //Jonas

////Practice create a function that fixes the capitalization of any argument name passed
//STUDY
const fixName = function (name) {
  const nameLower = name.toLowerCase();
  console.log(nameLower.toUpperCase()[0] + nameLower.slice(1));
};
fixName('BarthOLoMeu'); // Bartholomeu
fixName('jAcOb'); // Bartholomeu

//USING STRING METHODS TO COMPARE EMAILS
const email = 'hello@jonas.io';
const login = '  Hello@Jonas.Io \n';
const loginLower = login.toLowerCase();
console.log(loginLower);
// STUDY using trim string method to remove empty space from the string
const emailCorrect = login.toLowerCase().trim();
console.log(emailCorrect);

////METHOD TO REPLACE PARTS OF STRINGS
//STUDY
const priceGb = '288,97E';
const priceUs = priceGb.replace('E', '$').replace(',', '.');
console.log(priceUs);
////REPLACE ENTIRE WORDS OF A STRING...
//STUDY
const annoouncement =
  'All passengers come to boarding door 23. Boarding door 23!';
const annoouncementRepl = annoouncement.replaceAll('door', 'gate'); //STUDY replace vs replaceAll
//.replace('door', 'gate');
console.log(annoouncementRepl);

////SIMPLE STRING METHODS THAT RETURN BOOLEANS
//STUDY
//includes
const plane = 'a320neo';
console.log(plane.includes('a320')); //true
//STARTS WITH
//STUDY
console.log(plane.startsWith('a')); //true
console.log(plane.startsWith('b')); //false
//
const checKBaggage = function (items) {
  const lowerCase = items.toLowerCase();

  if (lowerCase.includes('knife') || lowerCase.includes('gun')) {
    console.log(
      'this person is a danger to the flight and needs to be shot in the back of the head immediately'
    );
  } else {
    console.log('this person is safe');
  }
};

checKBaggage('I have a laptop, some food and a pocket Knife');
checKBaggage('Socks and a camera');
checKBaggage('Got some snacks and a gun for protection');
*/
////STRING SPLIT METHOD
//STUDY
/*
console.log('a+very+nice+string'.split('+')); //['a','very','nice','string']
console.log('Christopher Arnold'.split(' ')); //['CHristopher', 'Arnold']
//USING SPLIT TO CREATE A VARIABLE ARRAY WITH TWO ELEMENTS...
//STUDY
const [firstName, lastName] = 'Christopher Arnold'.split(' ');
console.log(firstName); //CHristopher
////USING THE JOIN METHOD, WHICH IS THE OPPOSITE OF SPLIT
//STUDY
const newName = ['MR', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //MR Christopher ARNOLD
//// using a function and for loop to capitalize the first letter of each name
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('Jacob jefferson');
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert 
them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), 
and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have 
the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;
const btn = document.querySelector('button');

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});
*/
/* my attemt came close
btn.addEventListener('click', function () {
  const infoArray = document
    .querySelector('textarea')
    .value.toLowerCase()
    .split('\n');

  const finalArray = [];

  for (const n of infoArray) {
    const trimmed = n.trim();
    // const i = trimmed.indexOf;
    finalArray.push(
      trimmed.slice(0, trimmed.indexOf('_')) +
        trimmed[trimmed.indexOf('_') + 1].toUpperCase() +
        trimmed
          .slice(trimmed.indexOf('_') + 2)
          .padEnd(20, ' ')
          .padEnd(20 + 5, '✅')
    );
  }
*/

//.indexOf('bike')

//const names = 'jessica ann smith davis';
//console.log(names.split(' '));

//more string practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightsSplit = flights.replace('_', ' ').split('+');
console.log(flightsSplit);

for (const row of flightsSplit) {
  const [i1, i2, i3, i4] = row.split(';');
}
