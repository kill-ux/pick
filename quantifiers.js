/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 */
const every = (arr, func) => {
    for (let element of arr) {
        if (!func(element)) {
            return false
        }
    };
    return true
}


/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 */
const some = (arr, func) => {
    for (let element of arr) {
        if (func(element)) {
            return true
        }
    }
    return false
}

/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 */
const none = (arr, func) => !some(arr, func)
