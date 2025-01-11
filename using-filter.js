/**
 * @param {string[]}arr
 * @param {int}num
 * @returns {array}
 */
const filterShortStateName = (arr,num = 7) => arr.filter(e => e.length < num)

const regV = /[aeiou]/i
/**
 * @param {string[]}arr
 * @returns {boolean}
 */
const filterStartVowel = arr => arr.filter(e => {
    if (regV.test(e[0])) {
        return true
    } else {
        return false
    }
})

/**
 * @param {string[]}arr
 * @param {int}num
 * @returns {array}
 */
const filter5Vowels = (arr, num = 5) => arr.filter(e => e.match(new RegExp(regV, 'gi')) != null && e.match(new RegExp(regV, 'gi')).length >= num)


/**
 * @param {string[]}arr
 * @returns {array}
 */
const filter1DistinctVowel = arr => arr.filter(e => e.toLowerCase().match(new RegExp(regV, 'gi')) != null && new Set(e.toLowerCase().match(new RegExp(regV, 'gi'))).size == 1)


/**
 * @param {object[]}arr
 * @returns {array}
 */
const multiFilter = arr => arr.filter(e => filterShortStateName([e.capital],8).length == 0 &&
    filterStartVowel([e.name]).length == 0 &&
    filter5Vowels([e.tag], 1).length != 0 &&
    e.region !== "South"
)
