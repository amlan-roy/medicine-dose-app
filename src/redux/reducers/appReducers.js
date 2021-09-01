import { DOSE_GIVEN } from '../actions/appActions';
// import { TRIAL } from '../actions/appActions';

const initialState = {
  trial: 'initial',
  name: 'Amlan',
  petName: 'Bruno',
  dailyDoses: 6,
  timeBetweenDoses: 2,
  history: {
    '29-08-2021': [
      {
        name: 'Amlan Roy',
        hours: 9,
        minutes: 0,
      },
      {
        name: 'Amlan Roy',
        hours: 12,
        minutes: 0,
      },
      {
        name: 'Amlan Roy',
        hours: 15,
        minutes: 0,
      },
    ],
    '31-08-2021': [
      {
        name: 'Amlan Roy',
        hours: 15,
        minutes: 25,
      },
    ],
    '01-09-2021': [
      {
        name: 'Amlan Roy',
        hours: 15,
        minutes: 25,
      },
    ],
  },
};

export const appReducer = (state = initialState, action) => {
  const { entryDate, entryTime, entryName } = action;
  switch (action.type) {
    case DOSE_GIVEN:
      return {
        ...state,
        history: {
          ...state.history,
          [entryDate]: [
            ...state.history[entryDate],
            { name: entryName, time: entryTime },
          ],
        },
      };
    // case TRIAL:
    //   return { ...state, trial: state.trial.concat('1') };
    default:
      return state;
  }
};
