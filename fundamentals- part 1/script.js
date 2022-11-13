
/*
let doesChrisHaveABigDick = "yes";
console.log(doesChrisHaveABigDick);

console.log(typeof true);
console.log(typeof doesChrisHaveABigDick);
console.log(typeof 23);
console.log(typeof "yes");
*/

/*const now = 2037;
const ageChris = now - 1988;
const ageAmber = now - 1994;
console.log(ageChris);
console.log(ageAmber);
console.log(ageAmber + ageChris);
*/

/*const firstName = "Christopher";
const lastName = "Longdick";
const penisLength = 10;

console.log(firstName + lastName);
console.log(firstName + lastName + penisLength);

const inches = "inches";
const fullName = firstName + ' ' + lastName;
console.log(fullName);
const nameAndPenisSize = fullName + ' ' + penisLength + inches;
console.log(nameAndPenisSize);

penisLength > 9 = "small";
console.log(penisLength);
*/
/*
const inches = "inches";
const chrisPenisLength = 9 + ' ' + inches;
const yannPenisLength = 8 + ' ' + inches;
console.log(chrisPenisLength > yannPenisLength);
console.log(chrisPenisLength);
/*
/*
const now = 2022;
const ageJonas = now - 1991;
const ageChris = now - 1998;

console.log(now - 1991 > now - 1998);
console.log(ageJonas - 10 > ageChris);
*/
/*
console.log(25 - 10 - 5);



let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const now = 2022;
const ageChris = now - 1988;
const ageAmber = now - 1993;
const ageAverage = (ageChris + ageAmber) / 2;
console.log(ageAmber, ageChris, ageAverage);


// const massMark = 78;
// const massJohn = 195;
// const heightMark = 1.69;
// const heightJohn = 1.95;
//console.log(massMark, massJohn);
//console.log(heightMark, heightJohn);

//const massMark = 95;
//const massJohn = 85;
//const heightMark = 1.88;
//const heightJohn = 1.76;

/*
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;


const markHigherBMI = (bmiMark > bmiJohn);
console.log(bmiMark, bmiJohn, markHigherBMI);

if (bmiMark > bmiJohn) {
    console.log("Marks BMI is higher than Johns!");

} else {
    console.log("Johns BMI is higher than Marks");
}
*/

//STRINGS AND TEMPLATE LITERALS//
/*
const firstName = "Dragon";
const job = "Wage Slave";
const birthYear = "1988";
const year = 2022;

const dragon = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(dragon);

const newDragon = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(newDragon);

const futureJob = "front end developer";
const bestLanguage = "javaScript";

const dream = `I hope to be a ${futureJob}, in one year after I understand ${bestLanguage}`;
console.log(newDragon, dream);

//multiple line String//
console.log(`string
with multiple
lines`);
*/

//Taking decisions with code//
// If Else Statement Control Structure
/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can take this Dick 🍆');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is jailbait, wait another ${yearsLeft} years`)
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//TYPE CONVERSION VS TYPE COERSION//

//CONVERTING A STRING INTO A NUMBER type conversion
/*
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
//using the number function does not change the variable to a number as read by js, but
//simply gives the console a converted version

console.log(Number('jonas'));
console.log(String(23));

//type coercion
console.log('I have a massive ' + 10 + ' inch sandwich');
*/
//////////////////////////TRUTHY AND FALSEY VALUES//////////////////////////
// console.log(Boolean(""));
// console.log(Boolean("balls"));
//console.log(Boolean(2 > 0));

/*
const money = 0;
if (money) {
    console.log("don't spend it all");
} else {
    console.log("Get a fucking job");
}
*/

///////////////////////EQUALITY OPERATORS//////////////////////////////////

// const age = 18;
// if (age === 18) console.log('you just became an adult.');

//const weightInIlbs = Number(prompt("How many fucking pounds do you weigh?"));
// console.log(weightInIlbs);

// let gender = (prompt("gender?"));
// const weight = Number(prompt("weight in pounds?"));


// if (gender = "male", weight > 200) {
//     console.log("sorry bro, you are obese")
// } else {
//     console.log("you are not obese")
// }

// const favourite = Number(prompt("Whats your favorite number"));
// console.log(favourite);
// console.log(typeof favourite);

///////IF ELSE IF STATEMENT///////////
/*
if (favourite === 23) {
    console.log("cool 23 is a sick number")
} else if (favourite === 7) {
    console.log("7 is faaar out man")
} else {
    console.log("number is not 23 or 7")
}
*/

///////////////////SIMPLE BOOLEAN OPERATORS///////////////////
/*
const hasDriversLicense = true; // a
const Drunk = false; // b

console.log(hasDriversLicense && !Drunk);  //AND
console.log(hasDriversLicense || !Drunk);  //OR
console.log(!hasDriversLicense);            //NOT

// if (hasDriversLicense && isNotDrunk) {
//     console.log("Sarah can drive...");
// } else {
//     console.log("Someone else should drive");
// }

const isTired = false;  // c
console.log(hasDriversLicense && !Drunk && isTired);

if (hasDriversLicense && !Drunk && !isTired) {
    console.log("Sarah can drive...");
} else {
    console.log("Someone else should drive");
}
*/

//////////////////CODING CHALLENGE////////////////////////////

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times.
// The winner with the highest average score wins the a trophy!
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for
// that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule,
// a team only wins if it has a higher score than the other team, and the same
// time a score of at least 100 points. HINT: Use a logical operator to test for
// minimum score, as well as multiple else-if blocks 😉

// 4. BONUS 2: Minimum score also applies to a draw!
// So a draw only happens when both teams have the same score and
// both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

//// 1 ////
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;
// console.log(dolphinsAverageScore, koalasAverageScore);
//// 2 ////
// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log("The dolphins win!!");
// } else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log("its a tie");
// } else {
//     console.log("The Koalas are the champions");
// }

//// BONUS 1: ////

// const dolphinsAverageScore = (97 + 112 + 89) / 3;
// const koalasAverageScore = (109 + 95 + 110) / 3;
// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100) {
//     console.log("The Dolphins win with an average score of over 100");
// } else if (dolphinsAverageScore < 100 && koalasAverageScore < 100) {
//     console.log("neither team wins because they failed to score an average of 100");
// } else {
//     console.log("the Koalas are the Champions");
// }
// console.log(koalasAverageScore);

/*
const dolphinsAverageScore = (97 + 112 + 82) / 3;
const koalasAverageScore = (109 + 95 + 80) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100) {
    console.log(`The Dolphins win with an average score of ${dolphinsAverageScore}`);
} else if (dolphinsAverageScore < 100 && koalasAverageScore < 100) {
    console.log("neither team wins because they failed to score an average of 100");
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log("Ladies and gentleman we have a draw!");
} else if (dolphinsAverageScore < 100 && koalasAverageScore < 100) {
    console.log("no body wins at all");
} else {
    console.log("the Koalas are the victors!!");
}
*/

/////////////////////////SWITCH STATEMENTS////////////////////////////
/*
const day = (prompt("What day of the week is it"));


switch (day) {
    case 'monday': // day === monday
        console.log('Workout');
        console.log('coding practice 5🍅');
        break;
    case 'tuesday':
        console.log('finish resume');
        console.log('Lunch meeting with Tom and Grant');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('coding practice 6🍅');
        break;
    case 'friday':
        console.log('do a stage somewhere');
        console.log('coding practice 4🍅');
        break;
    case 'saturday':
        console.log('family reunion!!');
        console.log('typing practice 5🍅');
        break;
    case 'sunday':
        console.log('get into nature');
        break;
    default:
        console.log('not a valid day');
}
/*
//rewriting as if else for practice //
if (day === "moday") {
    console.log('Workout');
    console.log('coding practice 5🍅');
} else if (day === "tuesday") {
    console.log('finish resume');
    console.log('Lunch meeting with Tom and Grant');
} else if (day === "wednesday" || day === "thursday") {
    console.log('coding practice 6🍅');
} else if (day === 'friday') {
    console.log('do a stage somewhere');
    console.log('coding practice 4🍅');
} else if (day === 'saturday') {
    console.log('family reunion!!');
    console.log('typing practice 5🍅');
} else if (day = 'sunday') {
    console.log('get into nature');
} else {
    console.log('not a valid day');
}
*/

/////////////////THE CONDITIONAL (TERNARY) OPERATOR/////////////
//OPERATOR = EXPRESSION
// const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : //if
// console.log('I like to drink water');               //else

//USING TERNARY OPERATOR TO DECLARE A VARIABLE
//const age = 16;
// const drink = age >= 18 ? 'wine 🍷 ' : 'water';
// console.log(drink);

//REWRITING AS IF ELSE FOR PRACTICE //
/*
const age = 18;
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);
//PUTTING TERNARY CONDITION INTO A TEMPLATE LITERAL //
console.log(`I like to drink ${drink2}`);


const attraction = "men";
const girlIsFuckable = age >= 18 && attraction === 'men' ? true : false;
console.log(girlIsFuckable);

//more ternary practice
const womansAnswer = prompt('Whats your body count?')
const bodyCount = womansAnswer * 1.75;


const smashOrWife = bodyCount <= 5 ? 'wife her 💍' : 'shes for the streets, just smash 🍆';
console.log(bodyCount, smashOrWife);
*/

/*
/////////CODING CHALLENGE #4//////////////////////
// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, 
//it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' 
//for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an 
//if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
//    Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// TEST DATA: Test for bill values 275, 40 and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

//1//
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
console.log(tip);
// bill 275, tip = 41.25
// bill  40, tip = 8
// bill 430, tip = 86

//2//
console.log(`the bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`);
*/













