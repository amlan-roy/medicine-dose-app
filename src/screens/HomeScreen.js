import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import timeLeft from '../functions/timeLeft';
// import { setTiral } from '../redux/actions/appActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.appReducer);
  const { name, petName } = state;
  const [ret, setRet] = useState('');
  // const { trial } = useSelector((state) => state.appReducer);

  // const trialClickHandler = useCallback(() => {
  //   dispatch(setTiral());
  // }, [dispatch]);
  const onPressHandler = () => {
    var ans = timeLeft(state);
    if (ans === 'true') {
      setRet('true');
    } else {
      setRet('Hours: ' + ans.hour + ', Mins: ' + ans.min);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Text>Hello</Text>
        <Text>{name}</Text>
        <Text>{petName}'s next dose of medicine is due in</Text>
        {/* <Text>{trial}</Text> */}
        <Button title="function check" onPress={onPressHandler} />
        <Text>{ret}</Text>
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
