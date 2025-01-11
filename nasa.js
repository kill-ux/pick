const nasa = (N) => {
  let count = 1;
  let str = "";
  while (count <= N) {
    if (count % 3 == 0 && count % 5 == 0) {
      str += "NASA";
    } else if (count % 3 == 0) {
      str += "NA";
    } else if (count % 5 == 0) {
      str += "SA";
    } else {
      str += count;
    }
    if (count != N) {
      str += " ";
    }
    count++;
  }
  return str;
};
