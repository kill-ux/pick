const isFriday = date => date.getDay() == 5 ? true : false
const isWeekend = date => date.getDay() == 0 || date.getDay() == 6 ? true : false
const isLeapYear = date => (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) || (date.getFullYear() % 400 === 0);
const isLastDayOfMonth = date => {
    let month = date.getMonth()
    let afterDay = date.getDate()
    date.setDate(afterDay + 1)
    return date.getMonth() != month
}