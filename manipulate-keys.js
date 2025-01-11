/**
 *
 * @param {{}} nut
 * @param {Function} func
 */
const filterKeys = (nut, func) => {
  const result = {};
  Object.keys(nut).forEach((key) => {
    if (func(key)) {
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
const mapKeys = (nut, func) => {
  const result = {};
  Object.keys(nut).forEach((key) => {
    result[func(key)] = nut[key];
  });
  return result;
};

/**
 *
 * @param {{}} nut
 * @param {Function} func
 */
const reduceKeys = (nut, func, acc = "") => {
  let result = acc;
  Object.keys(nut).forEach((key) => {
    if (result === "") {
      result = key;
    } else {
      result = func(result, key);
    }
  });
  return result;
};

