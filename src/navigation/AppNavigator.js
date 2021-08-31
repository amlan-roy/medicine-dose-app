import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

const StackNav = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator initialRouteName="Home">
        <StackNav.Screen name="Home" component={HomeScreen} />
        <StackNav.Screen name="History" component={HistoryScreen} />
        <StackNav.Screen name="Settings" component={SettingsScreen} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
