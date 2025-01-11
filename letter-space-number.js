const letterSpaceNumber = (str) => {
    let reg = /[a-zA-Z] \d{1}(?=\W|$)/ig
    return str.match(reg) ? str.match(reg) : []
}