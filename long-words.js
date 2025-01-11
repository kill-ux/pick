/**
 * 
 * @param {string[]} arr 
 * @returns arr
 */
const longWords = arr => arr.every((e) => e.length >= 5)

/**
 * 
 * @param {string[]} arr 
 * @returns arr
 */
const oneLongWord = arr => arr.some((e) => e.length >= 10)

/**
 * 
 * @param {string[]} arr 
 * @returns arr
 */
const noLongWords = arr => arr.every((e) => e.length < 7)
