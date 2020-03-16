import React from 'react';
import {Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/Feed/List';
import Detail from '../pages/Feed/Detail';

const Stack = createStackNavigator();

export default function Feed({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
