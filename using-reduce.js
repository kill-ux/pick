/**
 * 
 * @param {int[]} arr 
 * @returns int
 */
const adder = (arr, init = 0) => arr.reduce(((count, e) => count + e), init)

/**
 * 
 * @param {int[]} arr 
 * @returns int
 */
const sumOrMul = (arr, init = 0) => arr.reduce(((count, e) => e % 2 == 0 ? count * e : count + e), init)

/**
 * 
 * @param {functions[]} arr 
 * @returns int
 */
const funcExec = (arr, init = 0) => arr.reduce(((count, func) => { return func(count) }), init)
