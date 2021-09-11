export const DOSE_GIVEN = 'DOSE_GIVEN';
export const SETTINGS_SAVED = 'SETTINGS_SAVED';
export const FETCH_DATA = 'FETCH_DATA';
import { link } from '../../config';

export const setDone = (name, date, hour, min) => {
  return async (dispatch) => {
    const response = await fetch(link + 'history/' + date + '.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        hours: hour,
        minutes: min,
      }),
    });

    dispatch({
      type: DOSE_GIVEN,
      entryDate: date,
      entryTime: { hours: hour, minutes: min },
      entryName: name,
    });
  }; // return {
  //   type: DOSE_GIVEN,
  //   entryDate: date,
  //   entryTime: { hours: hour, minutes: min },
  //   entryName: name,
  // };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://bruno-app-db-default-rtdb.firebaseio.com/history.json',
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const resData = await response.json();
      var loadedData = {};

      for (const key in resData) {
        var histDat = [];
        for (const key2 in resData[key]) {
          histDat.push({
            hours: parseInt(resData[key][key2].hours),
            minutes: resData[key][key2].minutes,
            name: resData[key][key2].name,
          });
          loadedData = {
            ...loadedData,
            [key]: histDat,
          };
        }
      }
      dispatch({
        type: FETCH_DATA,
        data: loadedData,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setSettings = ({
  name,
  petName,
  dailyDoses,
  timeBetweenDoses,
}) => {
  return {
    type: SETTINGS_SAVED,
    name: name,
    petName: petName,
    dailyDoses: parseInt(dailyDoses),
    timeBetweenDoses: parseInt(timeBetweenDoses),
  };
};
