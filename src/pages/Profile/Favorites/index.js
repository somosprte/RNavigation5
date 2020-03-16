import React from 'react';
import {View, Text} from 'react-native';

import {useFocusEffect, useIsFocused} from '@react-navigation/native';

import TabBar from '../tabBar';

export default function Favorites() {
  const isFocused = useIsFocused();
  const [count, setCount] = React.useState(Math.floor(Math.random() * 100));

  useFocusEffect(
    React.useCallback(() => {
      setCount(Math.floor(Math.random() * 100));
    }, []),
  );
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Favorites ({count})</Text>

      <TabBar />
    </View>
  );
}
