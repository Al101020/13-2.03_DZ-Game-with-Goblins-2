// import './title.css';

export function createDiv(textTitle) {
  const divStatus = document.createElement('div');
  divStatus.classList = 'status';
  divStatus.innerHTML = textTitle;
  document.querySelector('body').prepend(divStatus);
}

export function createH1(textTitle) {
  const titleH1 = document.createElement('h1');
  titleH1.classList = 'titleH1';
  titleH1.textContent = textTitle;

  document.querySelector('body').prepend(titleH1);
}
