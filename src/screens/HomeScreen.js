import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import timeLeft from '../functions/timeLeft';
import dosesGiven from '../functions/dosesGiven';
import { setDone } from '../redux/actions/appActions';
import { add, format } from 'date-fns';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.appReducer);
  const { name, petName } = state;
  const [ret, setRet] = useState('');
  const [dosesText, setDosesText] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const SECOND_MS = 1000;
  const now = new Date(); //current date object
  const currDate = format(add(now, { hours: 5, minutes: 30 }), 'dd-MM-yyyy'); //current date string

  // const { trial } = useSelector((state) => state.appReducer);

  const doseAmountStatus = () => {
    const doses = dosesGiven(state).toString() + '/' + state.dailyDoses;
    setDosesText(doses);
  };

  const fetchTimeLeftHandler = () => {
    const ans = timeLeft(state);
    if (ans === 'true') {
      setRet('Now');
    } else {
      setRet('Hours: ' + ans.hour + ', Mins: ' + ans.min);
    }
  };

  const doneClickHandler = useCallback(() => {
    dispatch(setDone(name, currDate, now.getHours(), now.getMinutes()));
  }, [dispatch, name, currDate, now.getHours(), now.getMinutes()]);

  useEffect(() => {
    fetchTimeLeftHandler();
    doseAmountStatus();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, SECOND_MS);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  useEffect(() => {
    doseAmountStatus();
  }, [state.history]);
  useEffect(() => {
    fetchTimeLeftHandler();
  }, [seconds]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Text>Hello</Text>
        <Text>{name}</Text>
        <Text>{petName}'s next dose of medicine is due in</Text>
        {/* <Text>{trial}</Text> */}
        <Text>{ret}</Text>
        <Text>Doses Given: {dosesText}</Text>
        <Button title="Done" onPress={doneClickHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
