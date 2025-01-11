/**
 *
 * @param {{}}obj
 */
const defaultCurry = (obj) => (obj2) => {
  const res = { ...obj };
  Object.keys(obj2).forEach((key) => {
    res[key] = obj2[key];
  });
  return res;
};

/**
 * @param {Function} func
 * @param {{}}obj
 */
const mapCurry = (func) => (nut) => {
  const result = {};
  Object.entries(nut).forEach((tab) => {
    const res = func(tab);
    result[res[0]] = res[1];
  });
  return result;
};

/**
 * @param {Function} func
 * @param {{}}obj
 */
const reduceCurry = (func) => (obj, ac) => {
  let result = ac;
  Object.entries(obj).forEach((tab) => {
    result = func(result, tab);
  });
  return result;
};

/**
 * @param {Function} func
 * @param {{}}obj
 */
const filterCurry = (func) => (obj) => {
  const result = {};
  Object.entries(obj).forEach((tab) => {
    if (func(tab)) {
      result[tab[0]] = obj[tab[0]];
    }
  });
  return result;
};

/**
 *
 * @param {{}} pers
 */
const reduceScore = (pers, acc) =>
  reduceCurry((res, [k, v]) =>
    v["isForceUser"] ? res + v["pilotingScore"] + v["shootingScore"] : res
  )(pers, acc);

/**
 *
 * @param {{}} pers
 */
const filterForce = (pers) =>
  filterCurry(([, v]) => v["isForceUser"] && v["shootingScore"] >= 80)(pers);

/**
 *
 * @param {{}} pers
 */
const mapAverage = (pers) =>
  mapCurry(([k, v]) =>{
    v.averageScore = (v["pilotingScore"] + v["shootingScore"])  /2
    return [k,v]
  })(pers);
