const data = require('../data/zoo_data');

const noParam = () => {
  const { species } = data;
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((specie) => {
    obj[specie.location].push(specie.name);
  }); return obj;
};

const sort = (obj) => {
  const { NE, NW, SE, SW } = obj;
  const locationArr = [NE, NW, SE, SW];

  locationArr.forEach((location) => {
    location.forEach((el) => {
      const [arr] = Object.values(el);
      arr.sort();
    });
  }); return obj;
};

const withNames = (sorted) => {
  const { species } = data;
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((specie) => {
    const parcialObj = {};
    parcialObj[specie.name] = [];
    specie.residents.forEach((el) => {
      parcialObj[specie.name].push(el.name);
    });
    obj[specie.location].push(parcialObj);
  });
  if (sorted) return sort(obj);
  return obj;
};

const withSex = (sex, sorted) => {
  const { species } = data;
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((specie) => {
    const parcialObj = {};
    parcialObj[specie.name] = [];
    specie.residents.forEach((el) => {
      if (el.sex === sex) parcialObj[specie.name].push(el.name);
    });
    obj[specie.location].push(parcialObj);
  });
  if (sorted) return sort(obj);
  return obj;
};

const checkParam = (options) => {
  const { includeNames, sex, sorted } = options;
  if (includeNames && sex) return withSex(sex, sorted);
  if (includeNames) return withNames(sorted);
};

const getAnimalMap = (options) => {
  if (!options) return noParam();
  const { includeNames } = options;
  if (!includeNames) return noParam();
  return checkParam(options);
};

module.exports = getAnimalMap;
