const data = require('../data/zoo_data');

const { employees, species } = data;

const oldestAnimal = (id) => {
  const animalAges = [];
  let result;
  let animals;
  species.forEach((el) => {
    if (el.id === id) {
      animals = el.residents;
      el.residents.forEach((obj) => {
        animalAges.push(obj.age);
      });
    }
  });
  const biggestAge = Math.max(...animalAges);
  animals.forEach((el) => {
    if (el.age === biggestAge) result = el.name;
  });
  return result;
};

const getFirstSpecieFromEmployee = (id) => {
  let specieId = '';
  employees.forEach((el) => {
    if (el.id === id) {
      const [fisrtId] = el.responsibleFor;
      specieId = fisrtId;
    }
  }); return specieId;
};

const getOldestFromFirstSpecies = (id) => {
  const specieId = getFirstSpecieFromEmployee(id);
  const oldestAnimalResult = oldestAnimal(specieId);
  const objResult = [];
  species.forEach((el) => {
    el.residents.forEach((animal) => {
      if (animal.name === oldestAnimalResult) {
        objResult.push(animal.name, animal.sex, animal.age);
      }
    });
  }); return objResult;
};

module.exports = getOldestFromFirstSpecies;
