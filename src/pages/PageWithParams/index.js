import React from 'react';
import {View, Text, Button} from 'react-native';

const users = [
  {id: 1, name: 'Vinícius'},
  {id: 2, name: 'Lucas'},
  {id: 3, name: 'Gabriel'},
  {id: 4, name: 'Pedro'},
];

export default function Home({route, navigation}) {
  const {id, name} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>PageWithParams:</Text>

      <Text>
        {name} é o número {id}
      </Text>

      <Text style={{fontWeight: 'bold', marginTop: 20}}>Other Users:</Text>

      {users.map(user => (
        <Button
          title={user.name}
          onPress={() =>
            navigation.push('PageWithParams', {id: user.id, name: user.name})
          }
          key={String(user.id)}
        />
      ))}

      <Text onPress={() => navigation.popToTop()}>VOLTAR PARA O INÍCIO</Text>
      <Text onPress={() => navigation.pop(2)}>VOLTAR x</Text>
    </View>
  );
}
