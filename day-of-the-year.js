const dayOfTheYear = (date1) => {
    // Create a date for January 1st of the same year
    let startOfYear = new Date(date1.getFullYear() + "-01-01");
    if (date1.getFullYear() < 100) {
        startOfYear = new Date("0001-01-01");
    }
    // Calculate the difference in milliseconds
    const diffTime = date1 - startOfYear;
    // Convert to days
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 because January 1st is day 1
    return diffDays;
};

console.log(dayOfTheYear(new Date('0001-01-01')) === 1); // true
console.log(dayOfTheYear(new Date('1664-08-09')) === 222); // true
console.log(dayOfTheYear(new Date('1600-12-31')) === 366); // true
console.log(dayOfTheYear(new Date('2020-06-22')) === 174); // true
console.log(dayOfTheYear(new Date('2048-12-08')) === 343); // true
console.log(dayOfTheYear(new Date('2048-11-08')) === 313); // true
