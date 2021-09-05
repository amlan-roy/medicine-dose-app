import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { add, format, subDays } from 'date-fns';

const HistoryElement = ({ data, date }) => {
  const now = new Date(); //current date object
  const currDate = format(add(now, { hours: 5, minutes: 30 }), 'dd-MM-yyyy'); //current date string
  const prevDate = format(
    subDays(add(now, { hours: 5, minutes: 30 }), 1),
    'dd-MM-yyyy',
  ); //current date string

  const headingBig =
    date === currDate ? 'Today' : date === prevDate ? 'Yesterday' : date;
  const headingSmall = headingBig === date ? '' : date;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.headingBig}>{headingBig}</Text>
        <Text>{headingSmall}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Text>
                {item.name}
                {'   '}
              </Text>
              <Text>
                {item.hours}
                {'   '}
              </Text>
              <Text>{item.minutes}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'gray',
  },
  headingBig: {
    fontSize: 20,
  },
});

export default HistoryElement;
