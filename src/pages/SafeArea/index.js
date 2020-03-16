import React, {useState} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import {View, StatusBar, Text, Image, Animated, ScrollView} from 'react-native';

export default function SafeArea({navigation}) {
  const insets = useSafeArea();
  const headerHeight = useHeaderHeight();

  return (
    <View
      style={{
        backgroundColor: '#abeafe',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: insets.bottom,
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#f00" />
      <Image
        source={{
          uri:
            'https://img.freepik.com/vetores-gratis/fundo-de-particulas-abstratas-tecnologia_52683-25766.jpg?size=626&ext=jpg',
        }}
        style={{
          width: '100%',
          height: 300,
        }}
      />
      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          ante ac sodales egestas. Etiam posuere libero sed facilisis sagittis.
          In venenatis condimentum ornare. Aenean vehicula vehicula hendrerit.
          Vestibulum scelerisque libero iaculis ornare vestibulum. Cras ultrices
          pulvinar consectetur. Fusce felis sem, dictum ut pretium id, venenatis
          non sapien. Phasellus non accumsan nulla, sed molestie nunc. Donec
          eleifend quis libero finibus auctor. Proin et gravida ipsum. Praesent
          placerat metus nec venenatis vehicula. Morbi varius viverra orci vel
          maximus. Mauris tincidunt elit sit amet luctus molestie. Praesent
          lacinia leo mauris, et finibus neque auctor vel. Proin hendrerit
          molestie ligula. Vivamus pharetra tempus orci sit amet semper. Etiam
          sed ipsum eu ligula auctor elementum in at augue. Ut id nunc ut ligula
          elementum tincidunt faucibus a sapien. Etiam sit amet eros lacinia,
          tincidunt risus vel, accumsan libero. Donec consectetur at ligula id
          tincidunt. Nulla aliquam, purus cursus suscipit consequat, sem est
          fermentum est, id commodo dolor leo eget tortor. Donec vel nunc ut
          turpis feugiat aliquam. Nam nec molestie nulla. Quisque hendrerit
          ipsum quam. Nam venenatis, ante et pellentesque iaculis, tellus sapien
          porta mauris, tincidunt sollicitudin magna metus nec tortor.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          ante ac sodales egestas. Etiam posuere libero sed facilisis sagittis.
          In venenatis condimentum ornare. Aenean vehicula vehicula hendrerit.
          Vestibulum scelerisque libero iaculis ornare vestibulum. Cras ultrices
          pulvinar consectetur. Fusce felis sem, dictum ut pretium id, venenatis
          non sapien. Phasellus non accumsan nulla, sed molestie nunc. Donec
          eleifend quis libero finibus auctor. Proin et gravida ipsum. Praesent
          placerat metus nec venenatis vehicula. Morbi varius viverra orci vel
          maximus. Mauris tincidunt elit sit amet luctus molestie. Praesent
          lacinia leo mauris, et finibus neque auctor vel. Proin hendrerit
          molestie ligula. Vivamus pharetra tempus orci sit amet semper. Etiam
          sed ipsum eu ligula auctor elementum in at augue. Ut id nunc ut ligula
          elementum tincidunt faucibus a sapien. Etiam sit amet eros lacinia,
          tincidunt risus vel, accumsan libero. Donec consectetur at ligula id
          tincidunt. Nulla aliquam, purus cursus suscipit consequat, sem est
          fermentum est, id commodo dolor leo eget tortor. Donec vel nunc ut
          turpis feugiat aliquam. Nam nec molestie nulla. Quisque hendrerit
          ipsum quam. Nam venenatis, ante et pellentesque iaculis, tellus sapien
          porta mauris, tincidunt sollicitudin magna metus nec tortor.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          ante ac sodales egestas. Etiam posuere libero sed facilisis sagittis.
          In venenatis condimentum ornare. Aenean vehicula vehicula hendrerit.
          Vestibulum scelerisque libero iaculis ornare vestibulum. Cras ultrices
          pulvinar consectetur. Fusce felis sem, dictum ut pretium id, venenatis
          non sapien. Phasellus non accumsan nulla, sed molestie nunc. Donec
          eleifend quis libero finibus auctor. Proin et gravida ipsum. Praesent
          placerat metus nec venenatis vehicula. Morbi varius viverra orci vel
          maximus. Mauris tincidunt elit sit amet luctus molestie. Praesent
          lacinia leo mauris, et finibus neque auctor vel. Proin hendrerit
          molestie ligula. Vivamus pharetra tempus orci sit amet semper. Etiam
          sed ipsum eu ligula auctor elementum in at augue. Ut id nunc ut ligula
          elementum tincidunt faucibus a sapien. Etiam sit amet eros lacinia,
          tincidunt risus vel, accumsan libero. Donec consectetur at ligula id
          tincidunt. Nulla aliquam, purus cursus suscipit consequat, sem est
          fermentum est, id commodo dolor leo eget tortor. Donec vel nunc ut
          turpis feugiat aliquam. Nam nec molestie nulla. Quisque hendrerit
          ipsum quam. Nam venenatis, ante et pellentesque iaculis, tellus sapien
          porta mauris, tincidunt sollicitudin magna metus nec tortor.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          ante ac sodales egestas. Etiam posuere libero sed facilisis sagittis.
          In venenatis condimentum ornare. Aenean vehicula vehicula hendrerit.
          Vestibulum scelerisque libero iaculis ornare vestibulum. Cras ultrices
          pulvinar consectetur. Fusce felis sem, dictum ut pretium id, venenatis
          non sapien. Phasellus non accumsan nulla, sed molestie nunc. Donec
          eleifend quis libero finibus auctor. Proin et gravida ipsum. Praesent
          placerat metus nec venenatis vehicula. Morbi varius viverra orci vel
          maximus. Mauris tincidunt elit sit amet luctus molestie. Praesent
          lacinia leo mauris, et finibus neque auctor vel. Proin hendrerit
          molestie ligula. Vivamus pharetra tempus orci sit amet semper. Etiam
          sed ipsum eu ligula auctor elementum in at augue. Ut id nunc ut ligula
          elementum tincidunt faucibus a sapien. Etiam sit amet eros lacinia,
          tincidunt risus vel, accumsan libero. Donec consectetur at ligula id
          tincidunt. Nulla aliquam, purus cursus suscipit consequat, sem est
          fermentum est, id commodo dolor leo eget tortor. Donec vel nunc ut
          turpis feugiat aliquam. Nam nec molestie nulla. Quisque hendrerit
          ipsum quam. Nam venenatis, ante et pellentesque iaculis, tellus sapien
          porta mauris, tincidunt sollicitudin magna metus nec tortor.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere
          ante ac sodales egestas. Etiam posuere libero sed facilisis sagittis.
          In venenatis condimentum ornare. Aenean vehicula vehicula hendrerit.
          Vestibulum scelerisque libero iaculis ornare vestibulum. Cras ultrices
          pulvinar consectetur. Fusce felis sem, dictum ut pretium id, venenatis
          non sapien. Phasellus non accumsan nulla, sed molestie nunc. Donec
          eleifend quis libero finibus auctor. Proin et gravida ipsum. Praesent
          placerat metus nec venenatis vehicula. Morbi varius viverra orci vel
          maximus. Mauris tincidunt elit sit amet luctus molestie. Praesent
          lacinia leo mauris, et finibus neque auctor vel. Proin hendrerit
          molestie ligula. Vivamus pharetra tempus orci sit amet semper. Etiam
          sed ipsum eu ligula auctor elementum in at augue. Ut id nunc ut ligula
          elementum tincidunt faucibus a sapien. Etiam sit amet eros lacinia,
          tincidunt risus vel, accumsan libero. Donec consectetur at ligula id
          tincidunt. Nulla aliquam, purus cursus suscipit consequat, sem est
          fermentum est, id commodo dolor leo eget tortor. Donec vel nunc ut
          turpis feugiat aliquam. Nam nec molestie nulla. Quisque hendrerit
          ipsum quam. Nam venenatis, ante et pellentesque iaculis, tellus sapien
          porta mauris, tincidunt sollicitudin magna metus nec tortor.
        </Text>
      </ScrollView>
    </View>
  );
}
