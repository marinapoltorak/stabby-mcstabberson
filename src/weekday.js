// function  dayOfTheWeek(month, day, year) {
//
// }

export function dayIsNumber(date) {
  console.log('this is the first log. it should tell us what is in day. ' + date);
  if (Number.isInteger(date)) {
    return true;
  } else {
    return false;
  }
}

export function weekDay(day) {
  if (dayIsNumber(day)) {
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',  'Saturday'];
    for (let i = 0; i < 7; i++) {
      if (day === i) {
        return daysOfTheWeek[i];
      }
    }
  } else {
    return ('Please enter a valid date in number format.');
  }
}
