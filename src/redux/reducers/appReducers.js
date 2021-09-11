import { DOSE_GIVEN, SETTINGS_SAVED, FETCH_DATA } from '../actions/appActions';

const initialState = {
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
    '02-09-2021': [
      {
        name: 'Amlan Roy',
        hours: 13,
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
            ...(state.history[entryDate] || []),
            {
              name: entryName,
              hours: entryTime.hours,
              minutes: entryTime.minutes,
            },
          ],
        },
      };
    case SETTINGS_SAVED:
      return {
        ...state,
        name: action.name,
        petName: action.petName,
        dailyDoses: action.dailyDoses,
        timeBetweenDoses: action.timeBetweenDoses,
      };
    case FETCH_DATA:
      return {
        ...state,
        history: action.data,
      };
    default:
      return state;
  }
};
