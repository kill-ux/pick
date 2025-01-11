/**
 *
 * @param {{}} nut
 * @param {Function} func
 */
const filterEntries = (nut, func) => {
  const result = {};
  Object.entries(nut).forEach((tab) => {
    if (func(tab)) {
      result[tab[0]] = nut[tab[0]];
    }
  });
  return result;
};

/**
 *
 * @param {{}} nut
 * @param {Function} func
 */
const mapEntries = (nut, func) => {
  const result = {};
  Object.entries(nut).forEach((tab) => {
    const res = func(tab);
    result[res[0]] = res[1];
  });
  return result;
};

/**
 *
 * @param {{}} nut
 * @param {Function} func
 */
const reduceEntries = (nut, func, acc = "") => {
  let result = acc;
  Object.entries(nut).forEach((tab) => {
    result = func(result, tab);
  });
  return result;
};

/**
 *
 * @param {{}} cart
 * @returns
 */
const totalCalories = (cart) => {
  return +reduceEntries(
    cart,
    (ac, [key, value]) => ac + nutritionDB[key].calories * (value / 100),
    0
  ).toFixed(1);
};

/**
 *
 * @param {{}} cart
 * @returns
 */
const lowCarbs = (cart) => {
  return filterEntries(
    cart,
    ([key, value]) => nutritionDB[key].carbs * (value / 100) < 50,
    0
  );
};

const mapValues = (nut, func) => {
  const result = {};
  Object.keys(nut).forEach((key) => {
    result[key] = func(nut[key]);
  });
  return result;
};

/**
 *
 * @param {{}} cart
 * @returns
 */
const cartTotal = (cart) => {
  return mapEntries(
    cart,
    ([key, value]) => [
      key,
      mapValues(nutritionDB[key], (v) => +(v * (value / 100)).toFixed(3)),
    ],
    0
  );
};
