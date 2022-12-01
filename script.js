'use strict';


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '🚫  No number!';

    //PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉  Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //GUESS IS WRONG

  if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess >= secretNumber ? '📈  Too high!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥  You lose the game!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'rgb(230, 78, 78)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  Number((document.querySelector('.guess').value = ' '));
});
