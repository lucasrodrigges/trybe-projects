const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { species } = data;
  const residents = [];

  species.forEach((el) => {
    if (el.name === animal) residents.push(...el.residents);
  });

  return residents.every((el) => el.age >= age);
};

module.exports = getAnimalsOlderThan;
