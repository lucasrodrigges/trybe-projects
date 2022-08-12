const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;
  const objResult = {};

  if (animal) {
    const { specie, sex } = animal;
    if (!sex) {
      return species.find((e) => e.name === specie).residents.length;
    }
    const arr = species.find((e) => e.name === specie).residents;
    return arr.filter((el) => el.sex === sex).length;
  }
  species.forEach((el) => {
    objResult[el.name] = el.residents.length;
  }); return objResult;
};

module.exports = countAnimals;
