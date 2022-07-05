const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se ao passar `count` como parâmtro a função retorna o número de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se ao passar `names` como parâmetro a função retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se ao passar `averageAge` a função retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se ao passar `location` como parâmetro a função retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Testa se ao passar `popularity` como parâmetro a função retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa se ao passar `availability` como parâmetro a função retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Testa se ao passar um parâmetro que não seja string, a função retorna a mensagem `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants(['count'])).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Teste se a função retorna `undefined` caso não passe nenhum parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se a função retorna `null` caso passe uma string que difere do esperado', () => {
    expect(handlerElephants('age')).toBe(null);
  });
});
