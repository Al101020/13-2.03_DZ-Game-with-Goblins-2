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
  const dead = Number(document.querySelector('.dead').textContent);
  let lost = Number(document.querySelector('.lost').textContent);

  if (seconds >= 5) {
    seconds = 0;
    lost++;
    document.querySelector('.lost').innerHTML = lost;
  }
  if (lost >= 5) {
    alert('Ты проиграл!');
    document.querySelector('.dead').textContent = 0;
    document.querySelector('.lost').textContent = 0;
  }
  if (dead >= 5) {
    alert('Ты выиграл!');
    document.querySelector('.dead').textContent = 0;
    document.querySelector('.lost').textContent = 0;
  }
}

setInterval(secondsLimit, 1000);

function poleClick(i) {
  const poleTarget = i.target;
  if (poleTarget.className === 'pole goblinPole') {
    let dead = Number(document.querySelector('.dead').textContent);
    dead++;
    document.querySelector('.dead').innerHTML = dead;
    secondsLimit();
  } else if (poleTarget.className === 'pole') {
    let lost = Number(document.querySelector('.lost').textContent);
    lost++;
    document.querySelector('.lost').innerHTML = lost;
    secondsLimit();
  }
  seconds = 0;
}

for (let i = 0; i < arrayPole.length; i++) {
  document.getElementById(`pole${[i + 1]}`).onclick = (j) => poleClick(j);
}
// --------- попал / промахнулся
document.querySelectorAll('span')[0].classList = 'dead';
document.querySelectorAll('span')[1].classList = 'lost';
