import React from 'react';
import {View, Text, Button} from 'react-native';

export default function List({navigation, route}) {
  const {name} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Detail: {name}</Text>
    </View>
  );
}
