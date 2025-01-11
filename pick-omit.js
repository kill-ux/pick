/**
 * 
 * @param {{}} obj 
 * @param {string[]} arr 
 */
const pick = (obj,arr) => {
    if (typeof arr == "string") {
        arr = [arr]
    }
    let newObj = {}
    Object.entries(obj).forEach((tab)=>{
        if (arr.includes(tab[0])) {
            newObj[tab[0]] = tab[1]
        }
    })
    return newObj
}

/**
 * 
 * @param {{}} obj 
 * @param {string[]} arr 
 */
const omit = (obj,arr) => {
    if (typeof arr == "string") {
        arr = [arr]
    }
    let newObj = {}
    Object.entries(obj).forEach((tab)=>{
        if (!arr.includes(tab[0])) {
            newObj[tab[0]] = tab[1]
        }
    })
    return newObj
}