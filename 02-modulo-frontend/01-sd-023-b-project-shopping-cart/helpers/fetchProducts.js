const fetchProducts = async (args) => {
  const fetchData = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${args}`);
  const data = await fetchData.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
