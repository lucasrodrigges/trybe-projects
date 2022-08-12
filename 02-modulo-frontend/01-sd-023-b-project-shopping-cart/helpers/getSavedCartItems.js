const getSavedCartItems = (args) => {
  const items = localStorage.getItem(args);
  return items;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
