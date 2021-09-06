import {
  setHours,
  setMinutes,
  differenceInMinutes,
  subDays,
  format,
  add,
  setDate,
  setMonth,
  setYear,
} from 'date-fns';

const timeLeft = (state) => {
  const { history, timeBetweenDoses } = state;
  const now = add(new Date(), { hours: 5, minutes: 30 }); //current date object
  const yestd = subDays(now, 1); // yesterdays date object
  const currDate = format(now, 'dd-MM-yyyy'); //current date string
  const prevDate = format(yestd, 'dd-MM-yyyy'); // yesterdays date string

  if (history[currDate]) {
    let len = history[currDate].length;
    let last = history[currDate][len - 1]; //last element of array with key of current date string
    var lastDate = new Date(now);
    lastDate = setHours(lastDate, last.hours + 5);
    lastDate = setMinutes(lastDate, last.minutes + 30);
    lastDate = setDate(lastDate, now.getDate());
    lastDate = setMonth(lastDate, now.getMonth());
    lastDate = setYear(lastDate, now.getFullYear());

    let diffInMinutes = differenceInMinutes(now, lastDate); //difference in minutes between last dose given and current time;
    let requiredDoseDifference = 60 * parseInt(timeBetweenDoses);
    // required time in minutes between each dose
    let minutesLeft = Math.abs(
      requiredDoseDifference - Math.abs(diffInMinutes),
    );
    if (diffInMinutes >= requiredDoseDifference) {
      return 'true'; //if its time for dose
    }
    //else return left time
    return {
      hour: parseInt(minutesLeft / 60),
      min: Math.abs(minutesLeft - parseInt(minutesLeft / 60) * 60),
    };
  }
  //similar to previous
  if (history[prevDate]) {
    let len = history[prevDate].length;
    let last = history[prevDate][len - 1]; //last element of array with key of current date string
    var lastDate = new Date(yestd);
    lastDate = setHours(lastDate, last.hours + 5);
    lastDate = setMinutes(lastDate, last.minutes + 30);
    lastDate = setDate(lastDate, yestd.getDate());
    lastDate = setMonth(lastDate, yestd.getMonth());
    lastDate = setYear(lastDate, yestd.getFullYear());
    let diffInMinutes = differenceInMinutes(now, lastDate);
    //difference in minutes between last dose given and current time;
    let requiredDoseDifference = 60 * parseInt(timeBetweenDoses);
    // required time in minutes between each dose
    let minutesLeft = requiredDoseDifference - diffInMinutes;
    if (diffInMinutes >= requiredDoseDifference) {
      return 'true'; //if its time for dose
    }
    //else return left time
    return {
      hour: parseInt(minutesLeft / 60),
      min: Math.abs(minutesLeft - parseInt(minutesLeft / 60) * 60),
    };
  }
  return 'true';
};

export default timeLeft;
