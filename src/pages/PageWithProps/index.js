import React from 'react';
import {View, Text} from 'react-native';

export default function Home({something}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>PageWithProps: {something}</Text>
    </View>
  );
}
