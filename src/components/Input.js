import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';

const Input = (props) => {
  const { textChangeHandler, key, placeholder, title } = props;
  const [text, setText] = React.useState('');
  const onChangeText = (passedText) => {
    setText(passedText);
  };
  useEffect(() => {
    textChangeHandler(key, text);
  }, [text]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        blurOnSubmit={true}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        {...props}
      />
    </SafeAreaView>
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
});

export default Input;
