require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  const param = 'computador';
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Testa se a função fetchProducts com o argumento `computador` executa o fetch', ()=> {
    fetchProducts(param);
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se ao chamar a função fetchProducts com o argumento `computador`, a função fetch utiliza o endpoint `https://api.mercadolibre.com/sites/MLB/search?q=computador`', () => {
    fetchProducts(param);
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Testa se o retorno da função fetchProducts com o argumento `computador` é uma estrutura de dados igual ao objeto `computadorSearch`', async () => {
    await expect(fetchProducts(param)).resolves.toEqual(computadorSearch);
  });
  it('Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: `You must provide an url.`', async () => {
    await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
});
