const escapeStr = "`\\/\"'"
const arr = [4, '2']
const obj = {
    str : "Hello",
    num : 20,
    bool : false,
    undef : undefined
}
const nested = {
    arr : [4, undefined, '2'],
    obj : {
        str : "Hi",
        num : 40,
        bool : true,
    }
}
Object.freeze(nested)
Object.freeze(obj)
Object.freeze(arr)
Object.freeze(nested.obj)
Object.freeze(nested.arr)
