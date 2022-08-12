const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const args = '<ol><li>Item</li></ol>';

  it('Testa se, ao executar saveCartItems com o argumento `<ol><li>Item</li></ol>`, o método localStorage.setItem é chamado', () => {
    saveCartItems(args);
    expect(localStorage.setItem).toHaveToBeenCalled();
  });
  it('Testa se, ao executar saveCartItems com o argumento `<ol><li>Item</li></ol>`, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro `cartItems` e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems(args);
    expect(localStorage.setItem).toHaveToBeenCalledWith('cartItems', args);
  });
});
