/**
 *
 * @param {{}} nut
 * @param {Function} func
 */
const filterValues = (nut, func) => {
  const result = {};
  Object.keys(nut).forEach((key) => {
    if (func(nut[key])) {
      result[key] = nut[key];
    }
  });
  return result;
};

/**
 *
 * @param {{}} nut
 * @param {Function} func
 */
const mapValues = (nut, func) => {
  const result = {};
  Object.keys(nut).forEach((key) => {
    result[key] = func(nut[key]);
  });
  return result;
};

/**
 *
 * @param {{}} nut
 * @param {Function} func
 */
const reduceValues = (nut, func , acc = 0) => {
  let result = acc;
  Object.keys(nut).forEach((key) => {
    result = func(result,nut[key]);
  });
  return result;
};
