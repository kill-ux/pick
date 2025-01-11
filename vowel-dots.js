const vowels = /[aeiou]/gi;
const vowelDots = (str) => {
  let res = "";
  for (const item of str) {
    if (item.match(vowels)) {
      res += item + ".";
    } else {
      res += item;
    }
  }
  return res;
};
