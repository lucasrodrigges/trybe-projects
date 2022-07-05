const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  if (!name) return {};
  const { employees } = data;
  for (let i = 0; i < employees.length; i += 1) {
    if (employees[i].firstName === name || employees[i].lastName === name) return employees[i];
  }
};

module.exports = getEmployeeByName;
