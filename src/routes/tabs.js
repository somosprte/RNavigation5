import React from 'react';
import {View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Feed from './feed';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const [tabBar, setTabBar] = React.useState(true);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Feed" component={Feed} /> */}
      <Tab.Screen name="Feed" options={{tabBarVisible: tabBar}}>
        {props => {
          const {route} = props;

          setTabBar(
            !route?.state?.routes.find(route => route.name === 'Detail'),
          );

          return <Feed {...props} />;
        }}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
