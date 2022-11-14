'use strict';
/*
//selects the text within a css class of message//
console.log(document.querySelector('.message').textContent);
//selects winning phase changed message from Start guessing to correct number
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 123;
//selects the value of the input field, inputs expect a value
document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));



*/
///////STUDY EVENT LISTENER///////
//left to right selects the button once clicked a function logs the value inputed into the box with a class of guess...
//the query selector waits on the eventlitener to detect a xclick befor it calls the function.
//document.querySelector('.check').addEventListener('click', function () {

//define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no number input
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'you win';
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'you lose';
    }
  }
}),
  // try again button function
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
  });
