import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../constants';


const CartScreen = ({ cartItems, setCartItems }) => {

  
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  
  const clearCart = () => {
    setCartItems([]);  
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 24,
        paddingTop: 55,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.h1,
          fontWeight: 'bold',
          color: COLORS.black,
          marginBottom: 20,
        }}
      >
         Your Cart
      </Text>

      
      <FlatList
        data={cartItems}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.green,
            }}
          >
            <Text style={{ color: COLORS.black, fontSize: SIZES.h4 }}>{item.name}</Text>
            <Text style={{ color: COLORS.black, fontSize: SIZES.h4 }}>
              {item.price} 
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />


      <TouchableOpacity
        onPress={clearCart}
        style={{
          marginTop: 20,
          backgroundColor: COLORS.green,
          padding: 10,
          borderRadius: SIZES.radius,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h4,
          }}
        >
          Clear Cart
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 30,
          paddingVertical: 20,
          borderTopWidth: 1,
          borderTopColor: COLORS.green,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h2,
            fontWeight: 'bold',
            color: COLORS.black,
          }}
        >
          Total: {calculateTotalPrice()} 
        </Text>
      </View>
    </View>
  );
};

export default CartScreen;
