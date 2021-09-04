import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Keyboard } from 'react-native';

import { setSettings } from '../redux/actions/appActions';
import Input from '../components/Input';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: 'placeholder',
    petName: 'placeholder2',
    dailyDoses: 0,
    timeBetweenDoses: 0,
  });

  const updateValues = (key, text) => {
    setValues({ ...values, [key]: text });
  };
  useEffect(() => {
    console.log(values);
  }, [values]);

  const onButtonPress = (values) => {
    Keyboard.dismiss();
    dispatch(setSettings(values));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Input
          label="Your Name"
          placeholder="Your Name"
          keyboardType="default"
          onChangeText={updateValues.bind(this, 'name')}
        />
        <Input
          label="Pet's Name"
          placeholder="Pet's Name"
          keyboardType="default"
          onChangeText={updateValues.bind(this, 'petName')}
        />
        <Input
          label="Daily doses"
          placeholder="Daily doses"
          keyboardType="number-pad"
          onChangeText={updateValues.bind(this, 'dailyDoses')}
        />
        <Input
          label="Time between doses"
          placeholder="Time between doses"
          keyboardType="number-pad"
          onChangeText={updateValues.bind(this, 'timeBetweenDoses')}
        />
        <Button
          title="Save"
          onPress={() => {
            onButtonPress(values);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
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
