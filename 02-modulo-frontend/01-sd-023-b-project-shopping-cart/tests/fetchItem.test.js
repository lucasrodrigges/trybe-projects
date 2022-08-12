require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  const id = 'MLB1615760527';
  const url = 'https://api.mercadolibre.com/items/MLB1615760527';
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Testa se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch é chamada', () => {
    fetchItem(id);
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', () => {
    fetchItem(id);
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto `item`', async () => {
    await expect(fetchItem(id)).resolves.toEqual(item);
  });
  it('Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: `You must provide an url`', async () => {
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
