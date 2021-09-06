import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import HistoryElement from '../components/HistoryElement';
const HistoryScreen = () => {
  const { history } = useSelector((state) => state);
  const keys = Object.keys(history);
  return (
    <View style={styles.container}>
      <FlatList
        data={keys.reverse()}
        renderItem={({ item }) => (
          <HistoryElement data={history[item]} date={item} />
        )}
        keyExtractor={(item) => item}
      />
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

export default HistoryScreen;
