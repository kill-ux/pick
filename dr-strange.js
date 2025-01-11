const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

const addWeek = (date) => {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];
  let firstDay = new Date("0001-01-01");
  let DaysPassed = (date.getTime() - firstDay.getTime()) / day;
  return days[DaysPassed % 14];
};

const timeTravel = (obj) => {
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)
    return obj.date
};
