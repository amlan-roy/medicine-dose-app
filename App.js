import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import Store from './src/redux/Store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
