import React from 'react'
import { Image, Linking, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'; 
const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <TouchableHighlight
          onPress={() => Linking.openURL('https://github.com/Makarena-211')}
        >
          <Image
            source={{
              uri: 'https://1000marche.net/wp-content/uploads/2022/07/Vkusno-%E2%80%93-i-Tochka-Logo.png',
            }}
            style={{
              width: 51,
              height: 45,
            }}
          />
        </TouchableHighlight>
      </View>
      <View>
        <TouchableHighlight onPress={() => navigation.navigate('Cart')}>
          <Image
            source={{
              uri: 'https://findicons.com/files/icons/1700/2d/512/cart.png',
            }}
            style={{
              width: 45,
              height: 45,
            }}
          />
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Header
