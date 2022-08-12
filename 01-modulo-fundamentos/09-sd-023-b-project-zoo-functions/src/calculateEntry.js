const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((el) => {
    if (el.age < 18) obj.child += 1;
    else if (el.age < 50) obj.adult += 1;
    else if (el.age >= 50) obj.senior += 1;
  }); return obj;
};

const calculateEntry = (entrants) => {
  if (!entrants) return 0;
  if (!Object.entries(entrants).length) return 0;
  const obj = countEntrants(entrants);
  const { prices } = data;

  return prices.adult * obj.adult + prices.child * obj.child + prices.senior * obj.senior;
};

module.exports = { calculateEntry, countEntrants };
