/**
 * @param {string[]}arr
 * @returns {array}
 */
const citiesOnly = arr => arr != null ? arr.map(obj => obj.city) : []
const capitalize = str => str[0].toUpperCase() + str.substring(1).toLowerCase()

/**
 * @param {string[]}arr
 * @returns {string[]}
 */
const upperCasingStates = arr => arr.map(str => str.split(" ").map(e => capitalize(e)).join(" "))

/**
 * @param {string[]}arr
 * @returns {string[]}
 */
const fahrenheitToCelsius = arr => arr.map(F => Math.floor((F.split('°F')[0] - 32) * (5 / 9)) + "°C")

/**
 * @param {object[]}arr
 * @returns {string[]}
 */
const trimTemp = arr => arr.map(e => ({ ...e, temperature: e.temperature.split(" ").join("") }))

/**
 * @param {object[]}arr
 * @returns {string[]}
 */
const tempForecasts = arr => arr.map(obj => `${fahrenheitToCelsius([trimTemp([obj])[0].temperature])}elsius in ${upperCasingStates([obj.city])[0]}, ${upperCasingStates([obj.state])[0]}`)
