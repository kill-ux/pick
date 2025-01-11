const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const sunnySunday = (date) => {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let firstDay = new Date("0001-01-01");
    let DaysPassed = (date.getTime() - firstDay.getTime()) / day;
    return days[DaysPassed % 6];
};