export const DOSE_GIVEN = 'Dose given';
export const SETTINGS_SAVED = 'Settings saved';

export const setDone = (name, date, hour, min) => {
  return {
    type: DOSE_GIVEN,
    entryDate: date,
    entryTime: { hours: hour, minutes: min },
    entryName: name,
  };
};

export const setSettings = (name, petName, dailyDoses, timeBetweenDoses) => {
  return {
    type: SETTINGS_SAVED,
    name: name,
    petName: petName,
    dailyDoses: dailyDoses,
    timeBetweenDoses: timeBetweenDoses,
  };
};
