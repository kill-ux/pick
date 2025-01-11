/**
 * 
 * @param {any[]} arr 
 * @param {function} func
 */
const forEach = (arr,func) => {
    let index = 0
    for (const element of arr) {
        func(element,index, arr)
        index++
    }
}