import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { Ionicons } from '@expo/vector-icons';

const BottomNav = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomNav.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <BottomNav.Screen name="Home" component={HomeScreen} />
        <BottomNav.Screen name="History" component={HistoryScreen} />
        <BottomNav.Screen name="Settings" component={SettingsScreen} />
      </BottomNav.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
