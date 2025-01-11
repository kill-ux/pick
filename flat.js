const flat = (arr, layer = 1) => {
  let index = 0;
  let count = 0;
  while (count < layer) {
    let skip = 0;
    for (const item of arr) {
      if (Array.isArray(item)) {
        skip++;
        arr = [
          ...arr.slice(0, index),
          ...item,
          ...arr.slice(index + 1, arr.length),
        ];
      }
      index++;
    }
    index = 0;
    count++;
    if (skip == 0) {
      return arr;
    }
  }
  return arr;
};
