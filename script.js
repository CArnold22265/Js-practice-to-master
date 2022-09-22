////Strict Mode///
'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

//const interface = 'audio';
*/
//creating the function
// function logger() {
//     console.log('My name is Dragon');
// }
// // calling, running, or invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// //(5,0) - the whole line is the paramaters, the individual numbers are called the arguments
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

//practicing functions
/*
function blend(shallots, garlicCloves, potatoes, fennel) {
    const puree = `puree with ${shallots} shallots, ${garlicCloves} cloves of garlic, ${potatoes} yukon potatoes, and
    ${fennel} cups of julienned fennel.`;
    return puree;
}

const fennelPuree = blend(2, 0, 0, 4);
console.log(fennelPuree);
*/
//More practice functions with switch state ments if else statements/////
/*
const soupPar = 2;
const makeMoreSoup = 4;
if (soupPar < 4) {
    console.log('get some more soup on chef, youll need it for service');
} else {
    console.log("we have enough soop for tonight chef")
}
//console.log(makeMoreSoup);

//rewrite as ternary with template literal displayed//
soupPar <= 4 ? console.log(`you'll need to make ${4 - soupPar} more quarts of soup today`) :
    console.log(`you have ${soupPar} quarts of soup for service`);

//HARDEST THING IVE DONE SO FAR//
let soupPar;
const sunday = 1;
const monday = 2;
const tuesday = 3;
const wednesday = 4;
const thursaday = 5;
const friday = 6;
const saturday = 7;

const weekEndPar = soupPar + 10;

function prepMore(quarts, day,) {
    if (quarts >= 1 && day < 4) {
        let soupPar = 4;
        console.log('soup');
    } else {
        let soupPar = 7 - quarts;
        console.log(`you need ${soupPar} quarts of soup for the day, or ${soupPar + 10} quarts to make it through the weekend`,)
    }
    return soupPar;

}
prepMore(1, 4);
*/

////////////FUNCTIONS DECLARATIONS VS EXPRESSIONS ///////////////
/*
//DECLARATION////
function calcAge1(birthYear) {
    const age = 2022 - birthYear;
    return age;
} //same as underneath

function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);

////FUNCTION STATEMENT////
const calcAge2 = function (birthyear) {
    return 2022 - birthyear;
}
const age2 = calcAge2(1991);
console.log(age2);

////ARROW FUNCTION(ES6)//// when you have one line of code and 1 paramater
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1986)
console.log(age3);

//arrow function with multiple paramaters and lines of code////
const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2022 - birthyear;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;

}
console.log(yearsUntilRetirement(1988, 'Dragon'));
console.log(yearsUntilRetirement(1994, 'Amber'));
*/

//////////FUNCTIONS CALLING OTHER FUNCTIONS/////////
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

function cutLettuce(vegetable) {
    return vegetable * .8
}

function LettuceWithNoEnd(LettuceInitial) {
    const lettuceHeadIlb = LettuceInitial * 1.2;
    const lettuceYield = cutLettuce(lettuceHeadIlb);
    const LettuceFinalYield = `lettuce initally came in ${LettuceInitial} heads,
    weighed out to ${lettuceHeadIlb}Ilbs, and then cut down to a final yield weight of${lettuceYield}`;
    return LettuceFinalYield;5
}

console.log(LettuceWithNoEnd(16));
*/
///Function called inside of if else
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}



const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    if (retirement < 0) {
        return -1;
    } else {
        return retirement;
    }
}

console.log(yearsUntilRetirement(1988, 'Chris'));
console.log(yearsUntilRetirement(1913, 'abraham'));
*/


//////////////////CODING CHALLENGE 1///////////////////////////////



/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each
team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console,
 together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".

4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.

5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

////1////

//const calcAverageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;


///2///
// const dolphinsScoreAvrg = calcAverageScore(44, 23, 71);
// const koalasScoreAvrg = calcAverageScore(65, 54, 49);

// console.log(dolphinsScoreAvrg, koalasScoreAvrg);
////3 & 4////

// function checkwinner(avrgScoreDolphins, avrgScoreKoalas) {

//     if (calcAverageScore(dolphinsScores) * 2 > calcAverageScore(koalasScores)) {
//         return `"dolphins win (${calcAverageScore(dolphinsScores)} vs ${calcAverageScore(koalasScores)}"`;
//     } else if (calcAverageScore(koalasScores) * 2 > calcAverageScore(dolphinsScores)) {
//         return `"Koalas win (${calcAverageScore(koalasScores)} vs ${calcAverageScore(dolphinsScores)})"`;
//     } else {
//         return "neither team wins";
//     }
// }

//first attempt average scores = NaN fuck! not DRY second attempt:
/*
const dolphinsScoreAvrg1 = calcAverageScore(44, 23, 71);
const koalasScoreAvrg1 = calcAverageScore(65, 54, 49);
const dolphinsScoreAvrg2 = calcAverageScore(85, 54, 41);
const koalasScoreAvrg2 = calcAverageScore(23, 34, 27);

function checkwinner(avrgScoreDolphins, avrgScoreKoalas) {

    if (avrgScoreDolphins / 2 > avrgScoreKoalas) {
        return console.log(`dolphins win "${avrgScoreDolphins} vs ${avrgScoreKoalas}"`);
    } else if (avrgScoreKoalas / 2 > avrgScoreDolphins) {
        return console.log(`"Koalas win ${avrgScoreKoalas} vs ${avrgScoreDolphins}"`);
    } else {
        return console.log("neither team wins");
    }
}

checkwinner(dolphinsScoreAvrg1, koalasScoreAvrg1);
checkwinner(dolphinsScoreAvrg2, koalasScoreAvrg2);
//FIGURED IT OU1 BOI!!!//

////5////
function checkWinnerNoDraw(avrgScoreDolphins, avrgScoreKoalas) {

    if (avrgScoreDolphins > avrgScoreKoalas) {
        return console.log(`dolphins win "${avrgScoreDolphins} vs ${avrgScoreKoalas}"`);
    } else if (avrgScoreKoalas > avrgScoreDolphins) {
        return console.log(`"Koalas win ${avrgScoreKoalas} vs ${avrgScoreDolphins}"`);
    } else {
        return console.log(-1);
    }
}
checkWinnerNoDraw(dolphinsScoreAvrg1, koalasScoreAvrg1);
checkWinnerNoDraw(dolphinsScoreAvrg2, koalasScoreAvrg2);

//I could have used let instead of const for score avg variables then i could have re declared them instead of creating two sets of variables..
// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2022 - birthyear;
//     const retirement = 60 - age;
//     //return retirement;
*/

////INTRODUCTION TO ARRAYS////
//common array (literal syntax)
// const myNickNames = ['Tofer', 'Charnold', 'Dragon'];
// console.log(myNickNames);

// const luckyNumbers = [1234, 555, 1034];
// console.log(luckyNumbers);

// //another way//
// const years = new Array(1991, 1988, 2043, 2021);

// //console log an element of an array//
// console.log(myNickNames[0]);
// console.log(myNickNames[2]);
// //getting the actual number of elements that are in the array
// console.log(myNickNames.length);
// //get the last element of an array 
// console.log(myNickNames[myNickNames.length - 1]);

// // change an array
// myNickNames[1] = 'That one guy';
// console.log(myNickNames[1], myNickNames);

// const firstName = 'Christopher';
// const chris = [firstName, 'Arnold', 2022 - 1988, 'future full-stack dev', myNickNames];
// console.log(chris);

//Excercise
/*
const calcAge = function (birthYear) {
    return 2022 - birthYear
}

const yearsUntilRetirement = function (age) {
    return console.log(60 - age);
}

const yearBorn = [1988, 2013, 2015, 1964];
const age1 = calcAge(yearBorn[0]);
const age2 = calcAge(yearBorn[1]);
const age3 = calcAge(yearBorn[2]);
const age4 = calcAge(yearBorn[yearsUntilRetirement.length - 1]);

const name1 = "Chris";
const name2 = "david";
const name3 = "John";
const name4 = "Gary";

const profileData = function (name, age) {
    const retirementYears = 60 - age;
    return [name, age, retirementYears];
}
const profile1 = profileData(name1, age1);
const profile2 = profileData(name2, age2);
const profile3 = profileData(name3, age3);

console.log(profile1);
console.log(profile2);
console.log(profile3);
*/

//////ARRAY METHODS////
/*
const friends = ['Grant', 'Murph', 'Yann'];
//puch method adds an element to the end of an array//
const newLength = friends.push(`Brennan`);
//brennan was added to the end of the array
console.log(friends);
console.log(newLength);

//unshift method adds an element to the beginning of an array
friends.unshift('Daniel');
console.log(friends);
//added daniel to the beginning of the array

//remove an element from an array
friends.pop(); //removes last element returns the item removed from the list
console.log(friends);

//remove first element
friends.shift();
console.log(friends);

//find out the position of an element in an array
console.log(friends.indexOf('Murph'));

//es6 methd that returns true if the element is in the array and false if it isnt
console.log(friends.includes('Murph'));
console.log(friends.includes('Brennan'));
//includes is commonly used in statements

if (friends.includes(`Murph`)) {
    console.log('You have a friend named Muurph')
}
*/



/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀


////1////
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15;
    } else {
        return bill * .20;
    }
}

console.log(calcTip(100));

////2////
const bills = [125, 555, 44];

////3////
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

////4////
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);

// pretty easy but i forgot how to use .last for last item in array...
*/
/*
////Object SAmple code////
const chris = {
    firstName: 'Chris',
    lastName: 'Arnold',
    age: 2022 - 1988,
    job: 'Cook',
    friends: ['Murph', 'Grant', 'Tom']

};
console.log(chris);

////Retrieving data from an object dot vs bracket notation
//1st way getting property
console.log(chris.lastName);
//2nd way with brackets
console.log(chris['lastName']);

const nameKey = 'Name';
console.log(chris['first' + nameKey]);
console.log(chris['last' + nameKey]); //can write any expression within brackets, but not with dot
/*
let interestedIn = prompt('What do you want to know about Chris? choose firstName, lastName, age, job, or friends'); console.log(chris[interestedIn]); //fucking sick bro

if (chris[interestedIn]) {
    console.log(chris[interestedIn])
} else[
    interestedIn = prompt(' wrong request dumbass! What do you want to know about Chris? choose firstName, lastName, age, job, or friends'),
    console.log(chris[interestedIn])
];
*/
// ////using dot and bracket to add new properties to the object
// chris.location = 'STL';
// chris.height = "5'9'' ";
// chris.weight = "165 ilbs";
// chris['TikTok'] = "I'm not a mindless bOt, read a fucking book!";
// console.log(chris);

// //challenge
// //"Chris has 3 friends, and his best friend is called Murph"

// //console.log(chris['firstName'] + 'has 3 friends and his best friends name is' + ' ' + chris.friends[0]);
// //close but not quite
// console.log(`${chris.firstName} has ${chris.friends.length} friends and his best friend is called ${chris.friends[0]}`);
// //sick string
// //practice 1 more string
// console.log(`${chris.firstName} ${chris.lastName} weighs ${chris.weight} and his height is ${chris.height}`);

////OBJECT METHODS
//ADD a FUNCTION TO AN OBJECT
/*
const chris = {
    firstName: 'Chris',
    lastName: 'Arnold',
    birthYear: 1988,
    job: 'Cook',
    friends: ['Murph', 'Grant', 'Tom'],
    hasDriversLicense: true,

    // calcAge: function () {
    //     return 2022 - this.birthYear;  //"this" refers to entire object
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        if (chris.hasDriversLicense) {
            return `${this.firstName} is a ${this.calcAge} year old ${this.job}, and he has a license`
        } else {
            return `${this.firstName} is a ${this.age} year old ${this.job}, and he has no license`

        }
    }
};

console.log(chris.getSummary());
*/
// CHALLENGE 
//"Chris is a 34 year old cook, and he has a drivers license"
// if (chris.hasDriversLicense) {
//     console.log(`${chris.firstName} is a ${chris.age} year old cook, and he has a license`)
// } else {
//     console.log(`${chris.firstName} is a ${chris.age} year old cook, and he has no license`)
// }; 

//I wrote this if else as a summarry above in object
//got it first try 😊


/*
const resume = {
    firstName: 'Christopher',
    lastName: 'Arnold',
    startedCooking: 2011,
    birthYear: 1988

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    }
};

console.log(resume.age);
*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    birthYeah: 1988,
    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

};
console.log(jonas.calcAge()); //you have to log the calcAge first or it will come back undefined!!!
console.log(jonas.age);

const resume = {
    firstName: 'Christopher',
    lastName: 'Arnold',
    occupation: 'Cheek Clapper',
    skills: ['mouth game', 'finger game', 'choking'],
    birthYear: 1988,
    beganEmployment: 2011,

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    calcSummary: function () {
        this.summary = `${resume.firstName} ${resume.lastName} is a certified ${resume.occupation}! His best skill is ${resume.skills[0] + ' and ' + resume.skills[1]} `;
        return this.summary;
    }
}
console.log(resume.calcAge());
resume.calcSummary();
console.log(resume.summary);
console.log(resume.age);
*/

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀


////1////
const profileMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;

    },

};
(profileMark.calcBMI());

const profileJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;

    },

};
profileJohn.calcBMI();

////3////
profileJohn.bmi > profileMark.bmi ?
    console.log(`${profileJohn.fullName}'s BMI(${profileJohn.bmi}) is higher than ${profileMark.fullName}'s (${profileMark.bmi})`) :
    console.log(`${profileMark.fullName}'s BMI(${profileMark.bmi}) is higher than ${profileJohn.fullName}'s (${profileJohn.bmi})`);

*/

////Implementing a for loop////
//for loop keeps running as long as condition is true ++increases a number by 1

// console.log('Lifting weights is repitition 1 🏋🏻');
// console.log('Lifting weights is repitition 2 🏋🏻');
// console.log('Lifting weights is repitition 3 🏋🏻');
// console.log('Lifting weights is repitition 4 🏋🏻');
// console.log('Lifting weights is repitition 5 🏋🏻');
// console.log('Lifting weights is repitition 6 🏋🏻');
// console.log('Lifting weights is repitition 7 🏋🏻');
// console.log('Lifting weights is repitition 8 🏋🏻');
// console.log('Lifting weights is repitition 9 🏋🏻');
// console.log('Lifting weights is repitition 10 🏋🏻');

// for (let rep = 1; rep <= 10; rep++) {
//     console.log('Lifting weights is repitition 1 🏋🏻');  //printed the string 10 times
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights is repetition ${rep}🏋🏻`);
// }

// const types = [];


// ////LOOPING ARRAYS, BREAKING AND CONTINUING


// const jonasArray = [
//     'jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// //individually logging each element of the array to the console
// for (let i = 0; i < jonasArray.length; i++) {
//     //reading from array
//     console.log(jonasArray[i], typeof jonasArray[i]);
//     // filling types of array
//     //types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }
//create new array which contains the type of each element in jonasArray array st line 623
//console.log(types);

//another example
//calculate ages of the four array birth years and store in a new array
/*
const years = [1991, 2007, 1969, 2020];
const age = [];
for (let i = 0; i < years.length; i++) {
    age.push(2022 - years[i]);
}
//console.log(age);

//continue and break

console.log('---ONLY STRINGS---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
//as soon as a number is found we want to break the loop

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/


/////////LOOP OVER AN ARRAY BACKWARDS CREATE A LOOP IN A LOOP////////////
/*
const jonasArray = [
    'jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const backArray = [];
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i])

}

//loop inside of  a loop 
// we have 3 different excercises we want to do 5 times each

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`-----starting excercise ${excercise}');
    `)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise}: lifting weights repetition ${rep} 🏋🏻`);
    }
}
*/

//////////////////////////////////////THE WHILE LOOP////////////////////////////////////
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights is repitition ${rep} 🏋🏻`);  //printed the string 10 times
}

let rep = 1;
while (rep <= 10) {           //while loops dont depend on a counter
    console.log(` WHILE: Lifting weights is repitition ${rep} 🏋🏻`);
    rep++;
}

//roll a dice randomly until we hit 6 then it stops
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
} 
*/

//practice notes//
/* 
--------------------FUNCTIONS-----------------------------
//--------------DEclaraion -can be used before it is declared.
const calcage = function (birthyear) {
    return 2037 - birthyear;
}

//------------------Expression-------------
Essentially a function value stored in a variable 

const calcAge = function (birthyear) {
    return 2037 - birthyear;
};

//------------------Arrow------------------
Great for quick one line functions. cant use .this
const calcAge = birthYear => 2037 - birthYear;


//-----------------call function-------------

//-------------------FOR LOOP-----------------

for (let rep = 1; rep <= 10; rep++) {
    //     console.log('Lifting weights is repitition 1 🏋🏻');  //printed the string 10 times
    // }
    

//-------------------PUSH ITEM TO ARRAY-------------
friends.push(`Brennan`)


//--------------------if else vs ternary-----------------
//---------IF else
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15;
    } else {
        return bill * .20;
    }
} 
//-----------ternary

function



*/
///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

////  1   &    2  ////
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];



////3////
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15;
    } else {
        return bill * .20;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);

}

console.log(tips, totals);

//4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:



const calcAverage = function (arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;              // = sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2 + 3 + 7]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));






// const calcAverage = function (arr) [
//     let = 0;
// ]

//variable = Expression1 ? Expression2 : Expression3
//const newLength = friends.push(`Brennan`);
//for (let rep = 1; rep <= 10; rep++) {
    //     console.log('Lifting weights is repitition 1 🏋🏻');  //printed the string 10 times
    // }
//for (let i = 0; i <= bills.length; i++ ); {
//   tips.push =  calcTip(bills[i]) 
//}