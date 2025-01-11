/**
 *
 * @param {Function} func
 * @param {int} wait
 */
const debounce = (func, wait = 0) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

/**
 *
 * @param {Function} func
 * @param {int} wait
 */
const opDebounce = (func, wait = 0, leading) => {
  if (leading == undefined) {
    return debounce(func, wait);
  } else if (leading.leading) {
    let skip = true;
    return (...args) => {
      if (skip) {
        func(...args);
        skip = false;
      }
      setTimeout(() => {
        skip = true;
      }, wait);
    };
  }
};
