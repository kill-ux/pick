const replica = (obj, ...objs) => {
  const res = { ...obj };
  objs.forEach((obj2) => {
    Object.keys(obj2).forEach((key) => {
      if (
        typeof res[key] == "object" &&
        typeof obj2[key] == "object" &&
        !Array.isArray(res[key]) &&
        !Array.isArray(obj2[key])
      ) {
        res[key] = replica(res[key], obj2[key]);
      } else {
        res[key] = obj2[key];
      }
    });
  });
  return res;
};
