import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {TouchableOpacity, Text} from 'react-native';

import Details from '../pages/Details';
import SafeArea from '../pages/SafeArea';
import PageWithProps from '../pages/PageWithProps';
import PageWithParams from '../pages/PageWithParams';
import FeedDetail from '../pages/Feed/Detail';

import Tabs from './tabs';
import Feed from './feed';
import Profile from './profile';

const Stack = createStackNavigator();

export default function routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="SafeArea"
        component={SafeArea}
        options={{headerTransparent: true}}
      />
      <Stack.Screen
        name="PageWithParams"
        component={PageWithParams}
        initialParams={{id: 2, name: 'Lucas'}}
      />
      <Stack.Screen name="PageWithProps">
        {props => <PageWithProps {...props} something="Pedro" />}
      </Stack.Screen>

      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
