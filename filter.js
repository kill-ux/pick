/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 */
const filter = (arr, func) => {
    let res = []
    arr.forEach((value, key, newarr) => func(value, key, newarr) && res.push(value))
    return res
}

/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 */
const reject = (arr, func) => {
    let res = []
    arr.forEach((value, key, newarr) => func(value, key, newarr) || res.push(value))
    return res
}

/**
 * 
 * @param {[]} arr 
 * @param {Function} func 
 */
const partition = (arr, func) => [filter(arr, func), reject(arr, func)]
