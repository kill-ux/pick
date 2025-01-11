/**
 *
 * @param {string} str
 */
const pronoun = (str) => {
  let res = {};
  const pronoun = ["i", "you", "he", "she", "it", "they", "we"];
  let tab = str.split(/[, \n]/);
  tab.forEach((word, index) => {
    word = word.toLowerCase();
    if (pronoun.includes(word)) {
      if (res[word]) {
        if (
          tab[index + 1] != undefined &&
          !pronoun.includes(tab[index + 1].toLowerCase())
        ) {
          res[word].word.push(tab[index + 1]);
        }
        res[word].count++;
      } else {
        res[word] = { word: [], count: 1 };
        if (
          tab[index + 1] != undefined &&
          !pronoun.includes(tab[index + 1].toLowerCase())
        ) {
          res[word].word.push(tab[index + 1]);
        }
      }
    }
  });
  return res;
};
