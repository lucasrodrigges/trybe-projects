// consts
const colors = document.getElementsByClassName('color');
const btn = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const btnVQV = document.getElementById('generate-board');
const boardPixel = document.getElementById('pixel-board');
const pixelLine = document.getElementsByClassName('pixel-line');
const btnColors = document.getElementById('reset-colors');
const btnReload = document.getElementById('reload-page');

// Getting Color
function getColor(event) {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  event.target.classList.add('selected');
}

// Changing Color
function changeColor(event) {
  const newColor = document.querySelector('.selected').style.backgroundColor;
  const click = event.target;
  click.style.backgroundColor = newColor;
}

function append(line) {
  boardPixel.appendChild(line).classList.add('pixel-line');
}

function generateColum(line, count) {
  for (let i = 0; i < count; i += 1) {
    const newColum = document.createElement('div');
    newColum.style.width = `${200 / count}px`;
    newColum.style.height = `${200 / count}px`;
    newColum.addEventListener('click', changeColor);
    // newColum.addEventListener('mouseover', changeColor);
    line.appendChild(newColum).classList.add('pixel');
  }
}

function fifth(number) {
  for (let i = 0; i < number; i += 1) {
    const newLine = document.createElement('div');
    generateColum(newLine, 50);
    append(newLine);
  }
}

function five(number) {
  for (let i = 0; i < number; i += 1) {
    const newLine = document.createElement('div');
    generateColum(newLine, 5);
    append(newLine);
  }
}

function generateLine(count) {
  boardPixel.innerHTML = '';
  if (count === '' || count < 5) {
    five(5);
    return alert('Board inválido!');
  }
  if (count > 50) {
    fifth(50);
    return alert('Board inválido!');
  }
  for (let i = 0; i < count; i += 1) {
    const newLine = document.createElement('div');
    generateColum(newLine, count);
    append(newLine);
  }
}

// Reseting
function reset() {
  for (let i = 0; i < pixelLine.length; i += 1) {
    pixelLine[i].remove();
  }
  if (input.value === '' || input.value < 5) return generateLine(5);
  if (input.value > 50) return generateLine(50);
  generateLine(input.value);
}

function resetColors() {
  colors[0].style.backgroundColor = 'black';

  for (let i = 1; i < colors.length; i += 1) {
    const randomNumber = Math.floor(Math.random() * 255 + 1);
    const randomNumber2 = Math.floor(Math.random() * 255 + 1);
    const randomNumber3 = Math.floor(Math.random() * 255 + 1);
    colors[i].style.backgroundColor = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3} )`;
  }
}

function reloadPage() {
  window.location.reload(true);
}

// Adding Event Listener
function addEvent() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', getColor);
  }
  btn.addEventListener('click', reset);
  btnVQV.addEventListener('click', () => generateLine(input.value));
  btnColors.addEventListener('click', resetColors);
  btnReload.addEventListener('click', reloadPage);
}

window.addEventListener('load', () => {
  generateLine(5);
  resetColors();
  addEvent();
});
