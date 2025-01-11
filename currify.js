
/**
 * @param {Function} func - 
 * @returns {Function}
 */
const currify = func => {
    return function curried(...arg) {
        if (arg.length >= func.length) {
            return func(...arg)
        } else {
            return (...arg2) => {
                arg.push(...arg2)
                return curried(...arg)
            }
        }
    }
};