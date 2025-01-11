const firstDayWeek = (week, year) => {
  let yearCopy = year;
  year = +(year);
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const daysInMonths = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const firstDayOfYear = new Date(year, 0, 1);
  firstDayOfYear.setFullYear(+year)
  const firstWeekOffset = firstDayOfYear.getDay() === 0 ? 6 : firstDayOfYear.getDay() - 1;

  const days = (week - 1) * 7 - firstWeekOffset + 1;
  let month = 0;
  let day = days;
  while (day > daysInMonths[month]) {
    day -= daysInMonths[month];
    month++;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if ((month) < 9) {
    month = "0" + (month + 1);
  } else {
    month++
  }
  return days > 0 ? day + "-" + month + "-" + yearCopy : "01-01-" + yearCopy;
};
