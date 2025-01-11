
/**
 *
 * @param {string} country
 */
const isWinner = (country) => {
  return db
    .getWinner(country)
    .then((data) => {
      if (data.continent != "Europe")
        return `${country} is not what we are looking for because of the continent`;
      return db.getResults(data.id);
    })
    .then((tab) => {
      if (Array.isArray(tab)) {
        if (tab.length < 3) {
          return `${country} is not what we are looking for because of the number of times it was champion`;
        } else {
          let years = "";
          let score = "";
          tab.forEach((obj, i) => {
            years += `${obj.year}${i != tab.length - 1 ? ", " : ""}`;
            score += `${obj.score}${i != tab.length - 1 ? ", " : ""}`;
          });
          return `${country} won the FIFA World Cup in ${years} winning by ${score}`;
        }
      }
      return tab;
    })
    .catch(() => {
      return `${country} never was a winner`;
    });
};
