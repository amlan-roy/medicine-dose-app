export const DOSE_GIVEN = 'Dose given';
// export const TRIAL = 'trial';

export const setDone = (name, date, time) => {
  return {
    type: DOSE_GIVEN,
    date: date,
    time: time,
    name: name,
  };
};

// export const setTiral = () => {
//   return {
//     type: TRIAL,
//   };
// };
