const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se passando dias da semena e horário como parâmetro retorna se o Zoológico estará aberto', () => {
    expect(getOpeningHours('Tuesday', '8:00-am')).toEqual('The zoo is open');
    expect(getOpeningHours('Wednesday', '8:00-am')).toEqual('The zoo is open');
  });
  it('Testa se ao passar um dia válido e um horário válido, porém num horário onde o zoológico está fechado, ele retorna que está fechado', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '0:00-am')).toEqual(expected);
    expect(getOpeningHours('Tuesday', '11:00-pm')).toEqual(expected);
  });
  it('Testa se passando `Monday` como parâmetro retorna `The zoo is closed`', () => {
    expect(getOpeningHours('Monday', '8:00-am')).toEqual('The zoo is closed');
  });
  it('Testa se passando um dia inválido como parâmetro retorna o erro `The day must be valid. Example: Monday`', () => {
    const dayError = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Tssesday', '8:00-am')).toThrow(dayError);
  });
  it('Testa se passando uma hora por extenso como parâmetro retorna mensagens de erro', () => {
    const hourError = 'The hour should represent a number';
    const minutesError = 'The minutes should represent a number';
    expect(() => getOpeningHours('Tuesday', 'seven:00-am')).toThrow(hourError);
    expect(() => getOpeningHours('Tuesday', '7:two-am')).toThrow(minutesError);
  });
  it('Testa se passando a abreviação errada como parâmetro retorna mensagem de erro', () => {
    const abbreviationError = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Tuesday', '8:00-ma')).toThrow(abbreviationError);
  });
  it('Testa se passando números de hora e minutos errado como parâmetro retorna mensagens de erro', () => {
    const invalidHourError = 'The hour must be between 0 and 12';
    const invalidMinutesError = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '24:00-am')).toThrow(invalidHourError);
    expect(() => getOpeningHours('Tuesday', '5:70-am')).toThrow(invalidMinutesError);
  });
  it('Testa se ao não passar parâmetro ele retorna todos os dias e seus respectivos horários de funcionamento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
