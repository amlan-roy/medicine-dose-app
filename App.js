import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import reduxStore from './src/redux/Store';

import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  const { store, persistor } = reduxStore();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
