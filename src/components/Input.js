import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const Input = ({
  label,
  placeholder,
  onChangeText,
  keyboardType,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        selectTextOnFocus={true}
        style={disabled ? styles.inputDisabled : styles.input}
        keyboardType={keyboardType}
        editable={!disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flexDirection: 'column',
  },
  input: {
    width: 250,
    padding: 5,
    borderWidth: 2,
  },
  inputDisabled: {
    width: 250,
    padding: 5,
    borderWidth: 2,
    backgroundColor: 'gray',
    color: 'white',
  },
});

export default Input;
