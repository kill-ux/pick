const multiply = (a, b) => {
  if (a == Infinity || b == Infinity) {
    return Infinity;
  }
  let res = 0;
  let sgin = false;
  if (a < 0) {
    a = -a;
    sgin = true;
  }
  while (a > 0) {
    res += b;
    a--;
  }
  if (sgin) {
    return -res;
  }
  return res;
};

const divide = (a, b) => {
  if (a == Infinity || b == Infinity) {
    return 0;
  }
  if (b == 0) {
    return Infinity;
  }
  let sgin = false;
  let sgin2 = 0;
  if (a < 0) {
    a = -a;
    sgin = true;
    sgin2++
  }
  if (b < 0) {
    b = -b;
    sgin = true;
    sgin2++
  }
  let count = 0;
  while (a - b >= 0) {
    count++;
    a = a - b;
  }
  if (sgin2 == 2) {
    return count
  }
  if (sgin) {
    return -count;
  }
  return count;
};

const modulo = (a, b) => {
  let div = divide(a, b);
  let mult = multiply(div, b);
  return a - mult;
};

