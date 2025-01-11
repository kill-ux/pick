const sameAmount = (str, reg1, reg2) => {
  let tab1 = str.match(new RegExp(reg1,"g")) || []
  let tab2 = str.match(new RegExp(reg2,"g")) || []
  if (tab1.length == tab2.length) {
    return true;
  }
  return false;
};
