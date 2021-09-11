import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import HistoryElement from '../components/HistoryElement';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/appActions';

const HistoryScreen = () => {
  const { history } = useSelector((state) => state);
  const keys = Object.keys(history);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
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
