/**
 *
 * @param {Function[]} arr
 */
const series = (arr) => {
  return new Promise(async (res, rej) => {
    let result = [];
    let err;
    for (const func of arr) {
      try {
        result.push(await func());
      } catch (error) {
        err = error;
      }
    }
    if (err) {
      rej(err);
    } else {
      res(result);
    }
  });
};
