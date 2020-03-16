import React from 'react';
import {View, Text, Button} from 'react-native';

import Post from './components/Post';

export default function List({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed List</Text>

      <Post title="Post 1" />
      <Post title="Post 2" />
      <Post title="Post 3" />
      <Post title="Post 4" />
      <Post title="Post 5" />
    </View>
  );
}
