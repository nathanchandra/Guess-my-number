'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//document.querySelector('.number').textContent = secretNum;

//listening for the click on check button, takes the event we
//are listening for and a function/method to handle the event
//we are listening for
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //when there is no input or 0 value
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';

    //when the guess is too high
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '👎 You have lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //when the guess is too low
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '👎 You have lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //when the player wins
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

//reset functionality
document.querySelector('.again').addEventListener('click', function () {
  //restore init conditons of message, number, score and guess input and values
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  //restore background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
