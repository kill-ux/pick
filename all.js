/**
 *
 * @param {{}} obj
 */
const all = (obj) => {
  return new Promise(async (res, rej) => {
    let result = {};
    let err;
    for (const [key, value] of Object.entries(obj)) {
      try {
        result[key] = await value;
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
