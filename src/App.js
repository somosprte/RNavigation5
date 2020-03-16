import React from 'react';
import {View, Text} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
