const words = str => str.split(" ")
const sentence = array => array.join(" ")
const yell = str => str.toUpperCase()
const whisper = str => "*"+str.toLowerCase()+"*"
const capitalize = str => yell(str[0]) + str.substring(1).toLowerCase()