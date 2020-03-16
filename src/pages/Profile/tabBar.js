import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

import {useNavigation} from '@react-navigation/native';

const routes = [{id: 'feed', title: 'Feed'}];

export default function tabBarTopCustom() {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: '#ff0', flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Text>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Text>Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Activities')}>
        <Text>Atividades</Text>
      </TouchableOpacity>
    </View>
  );
}
