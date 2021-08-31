import {
  setHours,
  setDate,
  setMinutes,
  differenceInMinutes,
  subDays,
  format,
} from 'date-fns';

const timeLeft = (state) => {
  const { history, timeBetweenDoses } = state;
  const now = new Date(); //current date object

  const yestd = subDays(now, 1); // yesterdays date object

  const currDate = format(now, 'dd-MM-yyyy'); //current date string
  const prevDate = format(yestd, 'dd-MM-yyyy'); // yesterdays date string

  var lastDate = new Date(now);
  if (history[currDate]) {
    let len = history[currDate].length;
    let last = history[currDate][len - 1]; //last element of array with key of current date string
    lastDate = now;
    lastDate = setHours(lastDate, last.hours);
    lastDate = setMinutes(lastDate, last.minutes);
    let diffInMinutes = differenceInMinutes(lastDate, now);
    //difference in minutes between last dose given and current time;
    let requiredDoseDifference = 60 * parseInt(timeBetweenDoses);
    // required time in minutes between each dose
    let minutesLeft = requiredDoseDifference - diffInMinutes;
    console.log(
      'now ',
      now,
      'last date ',
      lastDate,
      'req dose diff : ',
      requiredDoseDifference,
      'diff in min ',
      diffInMinutes,
      'minutesLeft ',
      minutesLeft,
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
    lastDate = now;
    lastDate = setHours(lastDate, last.hours);
    lastDate = setMinutes(lastDate, last.minutes);
    let diffInMinutes = differenceInMinutes(lastDate, now);
    //difference in minutes between last dose given and current time;
    let requiredDoseDifference = 60 * timeBetweenDoses;
    // required time in minutes between each dose
    if (diffInMinutes >= requiredDoseDifference) {
      return 'true'; //if its time for dose
    }
    //else return left time

    let minutesLeft = requiredDoseDifference - diffInMinutes;
    return {
      hour: parseInt(minutesLeft / 60),
      min: Math.abs(minutesLeft - parseInt(minutesLeft / 60) * 60),
    };
  }
  console.log('outside');
  return 'true';
};

export default timeLeft;
