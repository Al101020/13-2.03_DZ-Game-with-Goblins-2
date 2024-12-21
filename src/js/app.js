import '../components/pole/pole.css';
import '../components/title/title.css';

import { createPole, intervalGoblin } from '../components/pole/pole';

import { createH1, createDiv } from '../components/title/title';

createPole(); // создаём игровое поле
setInterval(intervalGoblin, 1000); // появления гоблина

createDiv('Промахов: <span>0</span><br>');
createDiv('Попаданий: <span>0</span><br>');
createH1('Игра с гоблинами'); // H1 - название игры

const arrayPole = Array.from(document.querySelectorAll('.pole'));
let seconds = 0;

function secondsLimit() {
  seconds++;
  if (seconds === 5) {
    seconds = 0;
    document.querySelector('.lost').textContent++;
  }
  if (document.querySelector('.lost').textContent >= 5) {
    alert('Ты проиграл!');
    document.querySelector('.dead').textContent = 0;
    document.querySelector('.lost').textContent = 0;
  }
  if (document.querySelector('.dead').textContent >= 5) {
    alert('Ты выиграл!');
    document.querySelector('.dead').textContent = 0;
    document.querySelector('.lost').textContent = 0;
  }
}

setInterval(secondsLimit, 1000);

for (let i = 0; i < arrayPole.length; i++) {
  function poleClick() {
    if (
      document.getElementById(`pole${[i + 1]}`).className === 'pole goblinPole'
    ) {
      document.querySelector('.dead').textContent++;
      secondsLimit();
    } else if (document.getElementById(`pole${[i + 1]}`).className === 'pole') {
      document.querySelector('.lost').textContent++;
      secondsLimit();
    }
    seconds = 0;
  }
  document.getElementById(`pole${[i + 1]}`).onclick = poleClick;
}

// --------- попал / промахнулся
document.querySelectorAll('span')[0].classList = 'dead';
document.querySelectorAll('span')[1].classList = 'lost';
