import React from 'react';
import {View, Text} from 'react-native';

import TabBar from '../tabBar';

export default function Activities() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Activities</Text>

      <TabBar />
    </View>
  );
}
