const join = (arr, delim = ",") => {
    let str = "";
    for (let i of arr) {
      str += i;
      if (i !== arr[arr.length - 1]) {
        str += delim;
      }
    }
    return str;
  };
  
  const split = (str, delim) => {
    if (str === "") {
      return [""];
    }
    let arr = [];
    let arrIndex = 0;
    let delimIndex = 0;
    let endwithdelim = false;
    if (delim !== "" && delim === str.substring(str.length - delim.length)) {
      endwithdelim = true;
    }
    while (str.length > 0) {
      if (delim !== "") {
        delimIndex = str.indexOf(delim);
  
        if ((arrIndex === 0 && delimIndex === -1) || delim === undefined) {
          return [str];
        }
  
        if (delimIndex === -1) {
          arr[arrIndex] = str;
          arrIndex++;
          break;
        }
  
        arr[arrIndex] = str.substring(0, delimIndex);
        arrIndex++;
        str = str.substring(delimIndex + delim.length);
      } else {
        arr[arrIndex] = str.substring(0, 1);
        arrIndex++;
        str = str.substring(1);
      }
    }
    if (endwithdelim) {
      arr[arrIndex] = "";
    }
    return arr;
  };