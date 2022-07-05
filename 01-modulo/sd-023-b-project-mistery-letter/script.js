const BTN = document.getElementById('criar-carta');
const LETTER = document.getElementById('carta-gerada');
const INPUT = document.getElementById('carta-texto');
// const SPANS = document.getElementsByTagName('span');
const COUNT = document.getElementById('carta-contador');
const STYLES = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function randomClass() {
  let classList = '';
  for (let i = 0; i < STYLES.length; i += 1) {
    classList += `${STYLES[i][Math.floor(Math.random() * STYLES[i].length)]} `;
  }
  return classList.trim();
}

function changeClass(e) {
  e.target.classList = '';
  // const newClass = e.target;
  let newClass = randomClass();

  while (e.target.classList === newClass) {
    newClass = randomClass();
  }
  e.target.classList = newClass;
}

// function addClass() {
//   for (let i = 0; i < SPANS.length; i += 1) {
//     SPANS[i].className = randomClass();
//   }
// }

function deleteSpans() {
  while (LETTER.hasChildNodes()) LETTER.removeChild(LETTER.firstChild);
}

function generateLetter() {
  deleteSpans();
  const ARRAY = INPUT.value.trim().split(' ');

  if (ARRAY[0] === '') {
    LETTER.innerText = 'Por favor, digite o conteúdo da carta.';
    return LETTER;
  }
  for (let i = 0; i < ARRAY.length; i += 1) {
    const NEW_LETTER = document.createElement('span');
    NEW_LETTER.innerHTML = `${ARRAY[i]}`;
    NEW_LETTER.addEventListener('click', changeClass);
    NEW_LETTER.className = randomClass();
    LETTER.appendChild(NEW_LETTER);
  }
  COUNT.innerText = ARRAY.length;
}

window.addEventListener('load', () => {
  BTN.addEventListener('click', generateLetter);
});
