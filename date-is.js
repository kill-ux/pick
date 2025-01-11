const isValid = (date) => {
  if (date == null) {
    return false;
  }
  let newdate = new Date();
  return !!newdate.setTime(date) 
};
const isAfter = (d1, d2) =>
  isValid(d1) && isValid(d2) && new Date(d1).getTime() > new Date(d2).getTime()
const isBefore = (d1, d2) =>
  isValid(d1) && isValid(d2) && new Date(d1).getTime() < new Date(d2).getTime()
const isFuture = (date) => isAfter(date, new Date());
const isPast = (date) => isBefore(date, new Date());
