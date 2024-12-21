// import '../../css/pole.css';
// import './pole.css';

export function createPole() {
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

export function intervalGoblin() {
  const arr = document.querySelectorAll('.pole');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].classList = 'pole';
  }

  const random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  arr[random].classList = 'pole goblinPole';
}
