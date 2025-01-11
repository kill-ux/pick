/**
 * @param {Function[]} arr - 
 * @returns {Function}
 */
const flow = arr => {
    return (...args) => arr.reduce((result, func, index) => {
        return index == 0 ? func(...result) : func(result)
    }, args)
};
