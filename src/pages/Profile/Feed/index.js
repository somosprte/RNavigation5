import React from 'react';
import {View, Text} from 'react-native';

import TabBar from '../tabBar';

export default function Feed(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed</Text>

      <TabBar />
    </View>
  );
}
