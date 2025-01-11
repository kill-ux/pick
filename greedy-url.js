const getURL = str => str.match(/https?:\/\/\S+/) || []
const greedyQuery = str => str.match(/https?:\/\/\S+\?(\S*=\S*&?){3,}/) || []
const notSoGreedy = str => str.match(/https?:\/\/\S*/) || []