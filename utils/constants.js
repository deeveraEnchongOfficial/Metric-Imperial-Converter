const galToL = 3.78541;
const lbsToKg = 0.453592;
const miToKm = 1.60934;

exports.units = {
  gal: "L",
  L: "gal",
  mi: "km",
  km: "mi",
  lbs: "kg",
  kg: "lbs",
};

exports.conversionRate = {
  gal: galToL,
  L: 1 / galToL,
  mi: miToKm,
  km: 1 / miToKm,
  lbs: lbsToKg,
  kg: 1 / lbsToKg,
};

exports.unitMapping = {
  gal: "gallons",
  L: "liters",
  mi: "miles",
  km: "kilometers",
  lbs: "pounds",
  kg: "kilograms",
};
