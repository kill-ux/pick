const slice = (arr, start, end) => {
  if (end == undefined) {
    end = arr.length;
  }
  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }
  let res;
  if (Array.isArray(arr)) {
    res = [];
  } else {
    res = "";
  }
  let count = 0;
  let skip = 0;
  for (let item of arr) {
    if (skip >= start && skip < end) {
      if (typeof res == "string") {
        res += item;
      } else {
        res[count] = item;
      }
      count++;
    }
    skip++;
  }
  return res;
};
