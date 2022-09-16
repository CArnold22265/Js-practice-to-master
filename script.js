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

const calcAverageScore = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

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




// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2022 - birthyear;
//     const retirement = 60 - age;
//     //return retirement;













