/**
 * @param {{} | []} obj
 */
const deepCopy = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  } else if (obj instanceof RegExp) {
    return obj;
  } else if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, deepCopy(v)])
    );
  }
  return obj;
};
