import { add, format } from 'date-fns';

const dosesGiven = (state) => {
  const { history } = state;
  const now = add(new Date(), { hours: 5, minutes: 30 }); //current date object
  const currDate = format(now, 'dd-MM-yyyy'); //current date string
  if (history[currDate]) {
    return history[currDate].length;
  }
  return 0;
};

export default dosesGiven;
