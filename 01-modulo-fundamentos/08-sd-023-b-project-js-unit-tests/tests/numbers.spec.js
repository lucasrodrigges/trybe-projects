/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });
  it('Verifica se algum número dado em string dentro do array retorna `true`', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
  })
  it('Verifica se retorna `false` quando uma letra é passada em string dentro do array', () => {
    expect(numbers([1, 'a', 3])).toBe(false);
  })
  it('Verifica se dada uma string vazia dentro do array, a função retorna `false`', () => {
    expect(numbers([' '])).toBe(false);
  })
});
