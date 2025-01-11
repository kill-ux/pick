/**
 *
 * @param {{}} obj
 */
const flags = (obj) => {
  const res = { alias: { h: "help" }, description: "" };
  Object.keys(obj).forEach((key) => {
    if ("help" != key) {
      res.alias[key[0]] = key;
    }
  });
  Object.keys(res.alias).forEach((key) => {
    if (obj["help"] == undefined) {
      if (res.alias[key] != "help") {
        if (res.description == "") {
          res.description = `-${key}, --${res.alias[key]}: ${
            obj[res.alias[key]]
          }`;
        } else {
          res.description = `${res.description}\n-${key}, --${
            res.alias[key]
          }: ${obj[res.alias[key]]}`;
        }
      }
    }
  });
  if (obj.help) {
    obj.help.forEach((key) => {
      if (res.description == "") {
        res.description = `-${key[0]}, --${key}: ${obj[key]}`;
      } else {
        res.description = `${res.description}\n-${key[0]}, --${key}: ${obj[key]}`;
      }
    });
  }

  return res;
};
