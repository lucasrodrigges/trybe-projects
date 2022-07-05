const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids.length) return [];

  const { species } = data;
  const result = [];
  for (let i = 0; i < species.length; i += 1) {
    ids.forEach((el) => {
      if (el === species[i].id) result.push(species[i]);
    });
  } return result;
};

module.exports = getSpeciesByIds;
