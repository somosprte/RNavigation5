import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default function tabBarTopCustom({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label = options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderBottomWidth: isFocused ? 2 : 0,
              borderBottomColor: 'blue',
            }}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}

      <Text>62 resultados</Text>
    </View>
  );
}
