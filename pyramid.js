const pyramid = (str, num) => {
  let count = 0;
  let s = "";
  while (count < num) {
    let a = 0;
    while (a < (num - count - 1) * str.length) {
      s += " ";
      a++;
    }
    a = 0;
    while (a <= count * 2) {
      s += str;
      a++;
    }
    if (count + 1 != num) {
      s += "\n";
    }
    count++;
  }
  return s;
};
