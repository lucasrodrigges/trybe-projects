// const fetch = require('node-fetch');

const fetchItem = async (id) => {
  const fetchData = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await fetchData.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
