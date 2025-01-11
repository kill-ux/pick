const array1 = "three";
const reverse = (arr) => {
  let arr2;
  if (typeof arr === "string") {
    arr2 = "";
    for (let char of arr) {
      arr2 = char + arr2;
    }
  } else {
    arr2 = [];
    let insertIndex = arr.length - 1;
    for (let item of arr) {
      arr2[insertIndex] = item;
      insertIndex--;
    }
  }

  return arr2;
};
console.log(reverse(array1));
