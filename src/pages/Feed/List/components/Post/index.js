import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import { Container } from './styles';

export default function Post({title}) {
  const navigation = useNavigation();

  return (
    <Button
      title={title}
      onPress={() => navigation.navigate('Detail', {name: title})}
    />
  );
}
