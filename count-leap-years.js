const countLeapYears = date => {
    let years = date.getFullYear()
    let count = 1
    let leap = 0
    while (years > count) {
        if ((count % 4 === 0 && count % 100 !== 0) || (count % 400 === 0)) {
            leap++
        }
        count++
    }
    return leap
}