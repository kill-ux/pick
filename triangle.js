const triangle = (str, num) => {
  let count = 0;
  let s = "";
  while (count < num) {
    let a = 0;
    while (a <= count) {
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
