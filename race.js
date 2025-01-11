/**
 *
 * @param {Promise[]} arr
 */
const race = (promises) =>
  new Promise((resolve, reject) => {
    if (promises.length > 0) {
      promises.forEach((promise) => promise.then(resolve, reject));
    }
  });

/**
 *
 * @param {Promise[]} arr
 * @param {int} count
 */
const some = (PromiseArr, count) => {
  return new Promise((resolve, reject) => {
    if (PromiseArr.length === 0 || count < 1) {
      resolve([]);
    }
    let results = {};
    let index = 0;
    let inserIndex = 0;
    for (let promise of PromiseArr) {
      let indexcopy = index;
      if (!(promise instanceof Promise)) {
        promise = Promise.resolve(promise)
      }
      promise
        .then((data) => {
          if (inserIndex < count) {
            results[indexcopy] = data;
            inserIndex++;
          }
          if (inserIndex == count || inserIndex === PromiseArr.length) {
            resolve(Object.values(results));
          }
        })
        .catch(reject);
      index++;
    }
  });
};

