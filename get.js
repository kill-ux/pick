const get = (src, path) => {
  tab = path.split(".");
  res = src;
  for (let item of tab) {
    res = res[item];
    if (res == undefined) {
      return undefined;
    }
  }
  return res;
};
