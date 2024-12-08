import "./pole.css";

function createPole() {
  let divPole = document.createElement("div");

  divPole.classList = "pole-game";

  document.querySelector("body").append(divPole);

  for (let i = 0; i < 16; i++) {
    let divPole = document.createElement("div");
    divPole.classList = "pole";
    divPole.id = "pole" + [i + 1];
    document.querySelector(".pole-game").append(divPole);
  }
}

createPole(); // создаём игровое поле

let arr = document.querySelectorAll(".pole");

function intervalGoblin() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList = "pole";
  }

  let random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  arr[random].classList = "pole goblinPole";
}

setInterval(intervalGoblin, 1000); // интервал появления гоблина
