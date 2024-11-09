import React from 'react';
import { Text, Image, TouchableHighlight, View } from 'react-native';
import { burgers } from '../goods'
import { COLORS, SIZES } from '../../constants';

const BurgersScreen = ({ addToCart }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}>
        Бургеры
      </Text>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {burgers.map((burger, idx) => (
          <View
            key={`burger-${idx}`}
            style={{
              width: '30%',
              marginBottom: 20,
            }}
          >
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              onPress={() => addToCart(burger)} // Add to cart when item is clicked
              style={{
                height: 120,
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: COLORS.gray,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: burger.image }} style={{ width: 40, height: 40 }} />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center',
                  }}
                >
                  {burger.name}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.primary,
                    marginTop: 10,
                    textAlign: 'center',
                  }}
                >
                  {burger.price}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BurgersScreen;
