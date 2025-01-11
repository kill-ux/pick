const arrToSet = (n) => new Set(n);
const arrToStr = (n) => n.join("");
const setToArr = (n) => [...n];
const setToStr = (n) => arrToStr(setToArr(n));
const strToArr = (n) => n.split("");
const strToSet = (n) => arrToSet(strToArr(n));
const mapToObj = (n) => Object.fromEntries(n);
const objToArr = (n) => Object.values(n);
const objToMap = (n) => new Map(Object.entries(n));
const arrToObj = (n) => ({ ...n });
const strToObj = (n) => arrToObj(arrToObj(n));
const superTypeOf = (obj) =>
  typeof obj === "number"
    ? "Number"
    : typeof obj === "string"
    ? "String"
    : obj === null
    ? "null"
    : typeof obj === "function"
    ? "Function"
    : typeof obj === "object"
    ? Array.isArray(obj)
      ? "Array"
      : obj.get !== undefined
      ? "Map"
      : obj.add !== undefined
      ? "Set"
      : "Object"
    : "undefined";
