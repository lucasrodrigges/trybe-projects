// Desafio 11
const eligibleNumber = (arr) => {
  arr.forEach((n) => {
    if (n < 0 || n > 9) return false;
  });
  return true;
};

const checkRepeat = (arr) => {
  
};

const generatePhoneNumber = (arr) => {
  if (arr.length !== 11) return 'Array com tamanho incorreto.';
  if (!eligibleNumber(arr)) return 'não é possível gerar um número de telefone com esses valores';
  if (checkRepeat(arr)) return 'não é possível gerar um número de telefone com esses valores';
};

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let bc = lineB + lineC;
  let ac = lineA + lineC;
  let ab = lineA + lineB;
  if (lineA > bc || lineB > ac || lineC > ab) {
    return false;
  } return true;
}

// Desafio 13
function hydrate(string) {
  let sum = 0;
  const getNumbers = /\d+/g;
  const numbersInString = string.match(getNumbers);
  // const justNumbers = numbersInString.map((str) => Number(str));

  for (let i of numbersInString) sum += Number(i);
  if (sum === 1) return `${sum} copo de água`;
  if (sum > 0 && sum < 10) return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
