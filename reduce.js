/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 * @param {any} accumulator
 */
const fold = (arr, func, accumulator = 0) => {
    arr.forEach((value, key, newarr) => {
        accumulator = func(accumulator, value)
    })
    return accumulator
}

/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 * @param {any} accumulator
 */
const foldRight = (arr, func, accumulator = 0) => {
    let res = [...arr]
    return fold(res.reverse(), func, accumulator)
}


/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 */
const reduce = (arr, func) => typeof arr[0] == "string" ? fold(arr, func, "") : fold(arr, func)


/**
 * 
 * @param {[]} arr 
 * @param {Function} func
 */
const reduceRight = (arr, func) => typeof arr[0] == "string" ? foldRight(arr, func, "") : foldRight(arr, func)
