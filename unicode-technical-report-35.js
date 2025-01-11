/**
    @param {int} len
    @param {string} str
    @returns {string}
*/
const padding = (str, len) => {
    str += ""
    let count = len - str.length
    while (count > 0) {
        str = "0" + str
        count--
    }
    return str
}

/**
    @param {Date} date
    @param {string} str
    @returns {string}
*/

const format = (date, str) => {
    const monthFullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let newstr = str.replace(/([yGMdEhmsaH])+/g, (match, char) => {
        switch (match) {
            case 'y':
                return Math.abs(date.getFullYear())
            case 'yyyy':
                return padding(Math.abs(date.getFullYear()), 4)
            case 'G':
                return date.getFullYear() > 0 ? "AD" : "BC"
            case 'GGGG':
                return date.getFullYear() > 0 ? "Anno Domini" : "Before Christ"
            case 'M':
                return date.getMonth()+1
            case 'MM':
                return padding(date.getMonth()+1, 2)
            case 'MMM':
                return monthFullNames[date.getMonth()].slice(0, 3)
            case 'MMMM':
                return monthFullNames[date.getMonth()]
            case 'd':
                return date.getDate()
            case 'dd':
                return padding(date.getDate(), 2)
            case 'E':
                return weekdays[date.getDay()].slice(0, 3);
            case 'EEEE':
                return weekdays[date.getDay()];
            case 'h':
                return date.getHours() != 12 ? date.getHours() % 12 : 12
            case 'hh':
                return padding(date.getHours() != 12 ? date.getHours() % 12 : 12, 2)
            case 'H':
                return date.getHours()
            case 'HH':
                return padding(date.getHours(),2)
            case 'm':
                return date.getMinutes()
            case 'mm':
                return padding(date.getMinutes(), 2)
            case 's':
                return date.getSeconds()
            case 'ss':
                return padding(date.getSeconds(), 2)
            case 'a':
                return date.getHours() <= 12 ? "AM" : "PM"
        }
    });
    return newstr
};
