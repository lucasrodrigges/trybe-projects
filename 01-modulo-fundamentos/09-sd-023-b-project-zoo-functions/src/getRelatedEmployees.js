const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => {
  let result = false;

  employees.forEach((e) => {
    const arr = e.managers;
    arr.forEach((e2) => {
      if (e2 === id) result = true;
    });
  }); return result;
};

const getRelatedEmployees = (managerId) => {
  const arrObjs = [];
  const result = [];

  if (isManager(managerId)) {
    employees.forEach((e) => {
      e.managers.forEach((e2) => {
        if (e2 === managerId) {
          arrObjs.push(e);
        }
      });
    });
    arrObjs.forEach((obj) => {
      const { firstName, lastName } = obj;
      result.push(`${firstName} ${lastName}`);
    }); return result;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
