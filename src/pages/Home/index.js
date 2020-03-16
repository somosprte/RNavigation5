import React, {useLayoutEffect, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export default function Home({navigation}) {
  useFocusEffect(
    useCallback(() => {
      console.log('FOCANDO A HOME');
    }, []),
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', marginBottom: 20, fontSize: 30}}>
        Home 2
      </Text>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <Button
        title="Go to PageWithProps"
        onPress={() => navigation.navigate('PageWithProps')}
      />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        title="Go to SafeArea"
        onPress={() => navigation.navigate('SafeArea')}
      />

      <Button
        title="Go to PageWithParams"
        onPress={() => navigation.navigate('PageWithParams')}
      />

      <Button
        title="Go to Feed"
        onPress={() =>
          navigation.navigate('Feed', {
            screen: 'List',
          })
        }
      />
    </View>
  );
}

/**
 * Root
 *  <>
 *    - Tabs
 *      - Home
 *      - Informations
 *        - Church
 *        - Outfit
 *      - Guests
 *      - Feed
 *    - FeedDetail
 *    - FeedCamera
 *  </>
 *  Auth
 */

/**
 * Root
 *  <>
 *    - Tabs
 *      - Feed
 *      - Explorar
 *      - Timeline
 *      - Profile
 *
 *    - Camera
 *  </>
 *  - Auth
 */
