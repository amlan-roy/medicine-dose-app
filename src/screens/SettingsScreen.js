import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/Input';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const { petName, dailyDoses, timeBetweenDoses } = useSelector(
    (state) => state.appReducer,
  );
  const [values, setValues] = useState({});

  const textChangeHandler = (key, text) => {
    setValues({ ...values, [key]: text });
  };

  const onSubmitEditing = (value) => {
    dispatch();
  };

  return (
    <View style={styles.container}>
      <Input
        title="Your name"
        key="name"
        placeholder={'Your name'}
        keyboardType="default"
        textChangeHandler={textChangeHandler}
      />
      <Input
        title="Pet's Name"
        key="petName"
        placeholder={petName.toString()}
        keyboardType="default"
        editable={false}
        textChangeHandler={textChangeHandler}
      />
      <Input
        title="Daily Doses"
        key="doses"
        placeholder={dailyDoses.toString()}
        keyboardType="number-pad"
        editable={false}
        textChangeHandler={textChangeHandler}
      />
      <Input
        title="Time Between Doses"
        key="timeBetweenDoses"
        placeholder={timeBetweenDoses.toString()}
        keyboardType="number-pad"
        editable={false}
        textChangeHandler={textChangeHandler}
      />
      <Button title="save" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
