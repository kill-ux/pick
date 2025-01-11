/**
 * @param {int} count
 * @param {Function} callback
 */
const retry = (count, callback) => {
  return async (...args) => {
    return await callback(...args)
      .then((v) => v)
      .catch(() => {
        if (count != 0) {
          return retry(count - 1, callback)(...args);
        } else {
          throw new Error(`x:${args}`);
        }
      });
  };
};

/**
 * @param {int} count
 * @param {Function} callback
 */
const timeout = (delay, callback) => {
  return async (...args) => {
    let err;
    setTimeout(() => {
      err = new Error("timeout");
    }, delay);
    return await callback(...args).then((value) => {
      if (err) {
        throw err;
      } else {
        return value;
      }
    });
  };
};

/*
const timeout = (delay, callback) => {
    return async (...args) => {
        let err = new Promise((rej) => {
            setTimeout(rej, delay, "err");
        });
        let call = new Promise((res) => {
            res(callback(...args));
        });
        return Promise.race([err, call])
            .then((value) => value)
            .catch(() => { throw Error("timeout") })

    }
}
 */

const r = Math.random().toString(36).slice(2);
const failNTimes =
  (n) =>
  async (...v) =>
    --n < 0 ? v : Promise.reject(Error(`x:${v}`));

const delayed =
  (delay) =>
  (...v) =>
    new Promise((s) => setTimeout(s, delay, v));

const a = async () => {
  console.log(await timeout(10, delayed(5))(r));
};

a();
