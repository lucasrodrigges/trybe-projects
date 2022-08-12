// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  let newArray = string.split(' ');
  return newArray;
}

// Desafio 4
function concatName(nameArray) {
  let i = 0;
  return `${nameArray[nameArray.length - 1]}, ${nameArray[i]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let numbersArray = numbers.sort((a, b) => b - a);
  let count = 1;
  for (let i = 1; i < numbersArray.length; i += 1) {
    if (numbersArray[0] === numbersArray[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance === cat2Distance) return 'os gatos trombam e o rato foge';
  if (cat1Distance < cat2Distance) return 'cat1';
  return 'cat2';
}

// Desafio 8
function divisivelAmbos(number) {
  if (number % 3 === 0 && number % 5 === 0) return true;
}

function checkResult(number) {
  if (divisivelAmbos(number)) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';

  return 'bug!';
}

function fizzBuzz(numbers) {
  const result = [];

  for (const number of numbers) {
    result.push(checkResult(number));
  }

  return result;
}

// Desafio 9
function encode(str) {
  const obj = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let encoded = '';

  for (const char of str) {
    if (obj[char]) encoded += obj[char];
    else encoded += char;
  } return encoded;
}

function decode(str) {
  const obj = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decoded = '';

  for (const char of str) {
    if (obj[char]) decoded += obj[char];
    else decoded += char;
  } return decoded;
}
console.log(decode('12345'));

// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  techs.sort();
  let newArray = [];
  for (let i = 0; i < techs.length; i += 1) {
    newArray.push({ tech: techs[i], name });
  }
  return newArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
