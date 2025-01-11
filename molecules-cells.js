const RNA = (str) => {
    let res = "";
    for (let item of str) {
      if (item == "G") {
        res += "C";
      } else if (item == "C") {
        res += "G";
      } else if (item == "T") {
        res += "A";
      } else if (item == "A") {
        res += "U";
      }
    }
    return res;
  };
  
  const DNA = (str) => {
    let res = "";
    for (let item of str) {
      if (item == "C") {
        res += "G";
      } else if (item == "G") {
        res += "C";
      } else if (item == "A") {
        res += "T";
      } else if (item == "U") {
        res += "A";
      }
    }
    return res;
  };
  
  