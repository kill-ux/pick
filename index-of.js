const indexOf = (array, value, index = 0) => {
  let count = 0;
  for (let item of array) {
    if (count >= index) {
      if (item == value) {
        return count;
      }
    }
    count++;
  }
  return -1;
};

const lastIndexOf = (array, value, index) => {
  if (index == undefined) {
    index = array.length;
  }
  let count = 0;
  let res = -1;
  for (let item of array) {
    if (count <= index) {
      if (item == value) {
        res = count;
      }
    }
    count++;
  }
  return res;
};

const includes = (array, value) => {
  for (let item of array) {
    if (item == value) {
      return true;
    }
  }
  return false;
};
