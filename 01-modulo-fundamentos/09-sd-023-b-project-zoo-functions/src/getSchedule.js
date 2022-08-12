const data = require('../data/zoo_data');

const noParam = () => {
  const { species, hours } = data;
  const weekArr = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const weeklySchedule = {};
  weekArr.forEach((day) => {
    weeklySchedule[day] = {};
    weeklySchedule[day].officeHour = '';
    weeklySchedule[day].exhibition = [];
    species.forEach((specie) => {
      if (specie.availability.some((currDay) => currDay === day)) {
        weeklySchedule[day].exhibition.push(specie.name);
      }
    });
    weeklySchedule[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  });
  weeklySchedule.Monday.officeHour = 'CLOSED';
  weeklySchedule.Monday.exhibition = 'The zoo will be closed!';
  return weeklySchedule;
};

const dayParam = (day) => {
  const { species, hours } = data;
  const obj = {};
  obj[day] = {};
  obj[day].officeHour = '';
  obj[day].exhibition = [];
  if (day === 'Monday') {
    obj.Monday.officeHour = 'CLOSED';
    obj.Monday.exhibition = 'The zoo will be closed!';
    return obj;
  }
  obj[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  species.forEach((specie) => {
    if (specie.availability.some((currDay) => currDay === day)) {
      obj[day].exhibition.push(specie.name);
    }
  }); return obj;
};

const checkParam = (schTar) => {
  const { species } = data;
  let result = 'animal';
  if (schTar === 'Monday') return 'day';
  species.forEach((specie) => {
    if (specie.availability.some((day) => day === schTar)) result = 'day';
    else if (!species.some((specie2) => specie2.name === schTar)) result = undefined;
  }); return result;
};

const getSchedule = (schTar) => {
  const { species } = data;
  const check = checkParam(schTar);
  if (!schTar || check === undefined) return noParam();
  if (check === 'animal') return species.find((specie) => specie.name === schTar).availability;
  if (check === 'day') return dayParam(schTar);
};

module.exports = getSchedule;
