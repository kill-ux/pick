const chunk = (arr, size) => {
  let arrs = [];
  let ar = [];
  let index = 0;
  let Jindex = 0;
  for (let i = 0; i < arr.length; i++) {
    ar[index] = arr[i];
    index++;
    if ((i + 1) % size == 0) {
      arrs[Jindex] = ar;
      ar = [];
      Jindex++;
      index = 0;
    }
  }
  if (ar.length > 0) {
    arrs[Jindex] = ar;
  }
  return arrs;
};
