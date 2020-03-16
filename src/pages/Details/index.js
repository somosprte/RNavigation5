import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details</Text>

      <Button
        title="Go to Details again ..."
        onPress={() => navigation.push('Details')}
      />

      <Button title="GoBack" onPress={() => navigation.goBack()} />

      <Button title="PopToTop" onPress={() => navigation.popToTop()} />
      <Button
        title="RESET"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Tabs'}],
          })
        }
      />
    </View>
  );
}
