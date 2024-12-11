// import '../../css/pole.css';
import './pole.css';
// console.log('qqq');

function createPole() {
  const divPoleGame = document.createElement('div');

  divPoleGame.classList = 'pole-game';

  document.querySelector('body').append(divPoleGame);

  for (let i = 0; i < 16; i += 1) {
    const divPole = document.createElement('div');
    divPole.classList = 'pole';
    divPole.id = `pole${[i + 1]}`;
    document.querySelector('.pole-game').append(divPole);
  }
}

createPole(); // создаём игровое поле

const arr = document.querySelectorAll('.pole');

function intervalGoblin() {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].classList = 'pole';
  }

  const random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  arr[random].classList = 'pole goblinPole';
}

setInterval(intervalGoblin, 1000); // интервал появления гоблина
