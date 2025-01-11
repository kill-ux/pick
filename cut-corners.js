const floor = (num) => {
  if (num === Infinity) {
    return num;
  }

  if (num < 0) {
    return -ceil(-num);
  }
  let rest = num;
  let result = 0;
  while (rest >= 1) {
    if (rest >= 10000000) {
      rest = rest - 10000000;
      result += 10000000;
    } else if (rest >= 1000000) {
      rest = rest - 1000000;
      result += 1000000;
    } else if (rest >= 1000) {
      rest = rest - 1000;
      result += 1000;
    } else if (rest >= 100) {
      // 101.5
      rest = rest - 100;
      result += 1000;
    } else if (rest >= 100) {
      // 101.5
      rest = rest - 100;
      result += result += 100; // 100
    } else if (rest >= 10) {
      rest = rest - 10;
      result += 10;
    } else if (rest < 10) {
      rest = rest - 1; // 0.5
      result += 1; // 101
    }
  }
  return num - rest;
};

const ceil = (num) => {
  if (num === Infinity) {
    return num;
  }

  if (num < 0) {
    return -floor(-num);
  }
  let rest = num;
  let result = 0;
  while (rest >= 1) {
    if (rest >= 10000000) {
      rest = rest - 10000000;
    } else if (rest >= 1000000) {
      rest = rest - 1000000;
    } else if (rest >= 1000) {
      rest = rest - 1000;
    } else if (rest >= 100) {
      rest = rest - 100;
    } else if (rest >= 10) {
      rest = rest - 10;
    } else if (rest < 10) {
      rest = rest - 1; // 0.5
    }
  }
  if (rest === 0) {
    return num;
  }
  return num + (1 - rest);
};

const trunc = (num) => {
  if (num === Infinity) {
    return num;
  }

  if (num < 0) {
    return ceil(num);
  }
  return floor(num);
};

const round = (num) => {
  if (num === Infinity) {
    return num;
  }

  let rest = Math.abs(num);
  while (rest >= 1) {
    if (rest >= 10000000) {
      rest = rest - 10000000;
    } else if (rest >= 1000000) {
      rest = rest - 1000000;
    } else if (rest >= 1000) {
      rest = rest - 1000;
    } else if (rest >= 100) {
      // 101.5
      rest = rest - 100;
    } else if (rest >= 10) {
      rest = rest - 10;
    } else if (rest < 10) {
      rest = rest - 1; // 0.5
    }
  }
  if (num > 0) {
    if (rest < 0.5) {
      return floor(num);
    } else {
      return ceil(num);
    }
  }
  if (rest < 0.5) {
    return ceil(num);
  } else {
    return floor(num);
  }
};
