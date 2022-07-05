const data = require('../data/zoo_data');

const noParam = () => {
  const { employees, species } = data;
  const result = [];
  const objFunction = () => ({ id: '', fullName: '', species: [], locations: [] });

  for (let i = 0; i < employees.length; i += 1) {
    const obj = objFunction();
    obj.id = employees[i].id;
    obj.fullName = `${employees[i].firstName} ${employees[i].lastName}`;
    employees[i].responsibleFor.forEach((id) => {
      species.filter((el) => el.id === id).forEach((specie) => {
        obj.species.push(specie.name);
        obj.locations.push(specie.location);
      });
    });
    result.push(obj);
  } return result;
};

const getByNameOrId = (name, id) => {
  const { employees, species } = data;
  const result = { id: '', fullName: '', species: [], locations: [] };

  employees.forEach((el) => {
    if (el.firstName === name || el.lastName === name || el.id === id) {
      result.id = el.id;
      result.fullName = `${el.firstName} ${el.lastName}`;
      el.responsibleFor.forEach((specieId) => {
        species.filter((specie) => specie.id === specieId).forEach((selectSpecie) => {
          result.species.push(selectSpecie.name);
          result.locations.push(selectSpecie.location);
        });
      });
    }
  }); return result;
};

const getEmployeesCoverage = (obj) => {
  if (!obj) return noParam();
  const { name, id } = obj;
  if (name || id) {
    if (getByNameOrId(name, id).fullName) return getByNameOrId(name, id);
    throw new Error('Informações inválidas');
  }
};

module.exports = getEmployeesCoverage;
