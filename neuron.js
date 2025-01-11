const neuron = (strArr) => {
  const result = {};
  strArr.forEach((element) => {
    let line = element.split(":");
    let type = line[0].toLowerCase();
    line = line.slice(1).join(":").trim();
    let typeNoS = type.slice(0, -1);
    let firsPart = line.split(/ - Response: /)[0];
    let snakeFirstPart = toSnake(firsPart);
    let response = line.split(/ - Response: /)[1];
    if (result[type] === undefined) {
      result[type] = {};
      result[type][snakeFirstPart] = {};
      result[type][snakeFirstPart][typeNoS] = firsPart;
      result[type][snakeFirstPart]["responses"] = [response];
    } else {
      if (result[type][snakeFirstPart] === undefined) {
        result[type][snakeFirstPart] = {};
        result[type][snakeFirstPart][typeNoS] = firsPart;
        result[type][snakeFirstPart]["responses"] = [response];
      } else {
        result[type][snakeFirstPart]["responses"].push(response);
      }
    }
  });
  return result;
};

const toSnake = (str) => {
  let result = "";
  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      result += char;
    } else if (char === " ") {
      result += "_";
    }
  }
  return result;
};