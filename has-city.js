/**
 * 
 * @param {string} country 
 * @param {[]} arr 
 */
const hasCity = (country, arr) => city => `${city} is ${arr.includes(city) ? "" : "not "}a city from ${country}`