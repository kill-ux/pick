
/**
 * 
 * @param {any[]} arr 
 * @param {Function} func 
 */
const map = (arr, func) => {
    let res = []
    arr.forEach((value, key, newarr) => res[key] = func(value, key, newarr))
    return res
}



/**
 * 
 * @param {any[]} arr 
 * @param {Function} func 
 */
const flatMap = (arr, func) => {
    let res = []
    arr.forEach((value, key, newarr) => {
        res = [
            ...res,
            ...(Array.isArray(func(value, key, newarr)) ? func(value, key, newarr) : [func(value, key, newarr)]),
        ]
    })
    return res
}

