/**
 * 
 * @param {Object} obj 
 */
const invert = (obj) => {
    let newobj = {}
    newobj = Object.entries(obj).map((tab) => tab.reverse())
    return Object.fromEntries(newobj)
}