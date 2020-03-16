import React from 'react';

// import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
// const Tab = createStackNavigator();

import {View} from 'react-native';

import Feed from '../pages/Profile/Feed';
import Favorites from '../pages/Profile/Favorites';
import Activities from '../pages/Profile/Activities';

import TabBarCustom from './tabBarTopCustom';

export default function Profile() {
  return (
    <Tab.Navigator tabBar={() => <View />}>
      {/* <Tab.Navigator headerMode="none"> */}
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Activities" component={Activities} />
    </Tab.Navigator>
  );
}
