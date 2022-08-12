const BTN_RESET = document.getElementById('reset-game');
const answerText = document.querySelector('#answer');
const ID_P = '#rgb-color';

function randomColor() {
  const math = Math.floor(Math.random() * 256);
  const math2 = Math.floor(Math.random() * 256);
  const math3 = Math.floor(Math.random() * 256);
  const rgb = `rgb(${math}, ${math2}, ${math3})`;

  return rgb;
}

function setColorTitle() {
  const p = document.querySelector(ID_P);
  p.innerText = randomColor();
}

function scoreCount() {
  const score = document.querySelector('#score');
  let value = parseInt(score.innerText, 10);
  if (answerText.innerText === 'Acertou!') {
    value += 3;
    score.innerText = value;
  }
}

function answer(e) {
  const color = e.target.style.backgroundColor;
  const p = document.querySelector(ID_P);
  if (color === p.innerText) {
    answerText.innerText = 'Acertou!';
    scoreCount();
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

function applyColors() {
  const circles = document.querySelectorAll('.ball');
  const p = document.querySelector(ID_P);

  for (let i = 0; i < circles.length; i += 1) {
    circles[i].style.backgroundColor = randomColor();
    circles[i].addEventListener('click', answer);
  }
  circles[Math.floor(Math.random() * circles.length)].style.backgroundColor = p.innerText;
}

function resetGame() {
  answerText.innerText = 'Escolha uma cor';
  setColorTitle();
  applyColors();
}

window.addEventListener('load', () => {
  setColorTitle();
  applyColors();
  scoreCount();
  BTN_RESET.addEventListener('click', resetGame);
});
