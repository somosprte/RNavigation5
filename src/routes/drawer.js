import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Text} from 'react-native';

import Home from '../pages/Home';
import Feed from '../pages/Feed/List';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{title: 'Drawer Home', drawerIcon: () => <Text>asddsa</Text>}}
      />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}
