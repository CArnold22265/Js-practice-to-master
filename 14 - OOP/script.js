'use strict';
/*
const Person = function (firstName, BirthYear) {
  //instance properties
  this.firstName = firstName;
  this.BirthYear = BirthYear;
};
const christopher = new Person('Christopher', 1988);
const amber = new Person('Amber', 1993);
const laurie = new Person('Laurie', 1971);

//STUDY boolean logic to determine if something is an instance of a specified object
//console.log(christopher instanceof Person);

//STUDY Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.BirthYear);
};

christopher.calcAge();
//STUDY check prototypes of an object
console.log(christopher.__proto__);

// STUDY check to see if a given protoype is possessed by a given object
console.log(Person.prototype.isPrototypeOf(christopher));

//STUDY you can also set properties on a prototype, not just methods...
Person.prototype.species = 'Homo Sapiens';
console.log(christopher.species, laurie.species);

console.log(christopher.hasOwnProperty('firstName')); //true
console.log(christopher.hasOwnProperty('species')); // false because property belongs to the prototype, not the object
//Object of the prototype which is the top of the prototype chain
console.log(christopher.__proto__.__proto__);
console.log(Person.prototype.constructor);

//STUDY PROTOTYPES OF ARRAYS AND OBJECTS..
const arr = [1, 4, 5, 8, 4, 3, 2, 1];
console.log(arr.__proto__);
//STUDY ADDA NEW METHOD TO THE PROTOTYPE OF THE ARRAY CONSTRUCTOR bad practice
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
*/
//SECTION CHALLENGE
/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accellerate = function () {
  return console.log(`${this.speed + 10}km/hr`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
const testCar = new Car('Buick', 120);
testCar.accellerate();

const dc1 = new Car('BMW', 120);
const dc2 = new Car('Mercedes', 120);
dc2.brake();
*/
//SECTION STUDY Challenge number 2.
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   brake() {
//     this.speed -= 5;
//     return console.log(this.speed);
//   }
//   accellerate() {
//     this.speed += 10;
//     return console.log(this.speed);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }

// const fordy = new CarCl('Ford', 120);
// fordy.brake();
// fordy.brake();
// fordy.brake();
// fordy.accellerate();
// fordy.accellerate();
// fordy.accellerate();
//SECTION STUDY ES6 CLASSES...
//CLASS EXPRESSION
// const personCl = class {

// }

//class declaration
/*
class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //place methods here and they will be logged as prototypes..
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  hey() {
    return console.log(`${this.fullName}🤚`);
  }
}

const yan = new personCl('Yann McFuckface', 1996);
yan.calcAge();
yan.hey();

console.log(pico.print());
console.log(pico.__proto__);
//1.) classes are not hoisted you have to write them before they are declared
//2.) classes are first class citizens which means we can put them into functions
//3.) Classes are always executed in strict mode

//SECTION STUDY GETTERS AND SETTERS
//GETTER
const account = {
  owner: 'Christopher Arnold',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 50;
*/

///STUDY CLASS INHERITANCE
//Parent object
/*
const Person = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
};
//Method on Parent object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//Child Object
const Student = function (fullName, birthYear, course) {
  Person.call(this, fullName, birthYear);
  this.course = course;
};

//linking prototypes STUDY
Student.prototype = Object.create(Person.prototype);

//Method on student Prototype has to be after the previous line of code.
Student.prototype.introduce = function () {
  console.log(`My name is ${this.fullName}, and I study ${this.course}`);
};

//creating a student..
const gary = new Student('Gary Johnson', 2002, 'Computer Science');

gary.introduce();
gary.calcAge();
//checking to see if gary really inherited the class of person
console.log(gary instanceof Person);
Student.prototype.constructor = Student;
*/

//SECTION LESSON 3
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.brake = function () {
  this.speed -= 5;
  return console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 120, 23);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

EV.prototype.accellerate = function () {
  this.speed += 20;
  this.charge -= 1;
  return console.log(
    `Tesla is going ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

tesla.accellerate();
tesla.accellerate();
tesla.accellerate();
tesla.accellerate();
tesla.accellerate();
tesla.chargeBattery(90);
*/

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //arguments from parent class..
    super(fullName, birthYear);
  }
}
