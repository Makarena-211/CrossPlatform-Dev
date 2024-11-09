import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from './constants';
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import Popular from './src/components/Popular';
import CartScreen from './src/components/CartScreen';

const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {({ navigation }) => (
            <ScrollView
              style={{
                padding: 24,
                paddingTop: 55,
                paddingBottom: 75,
                backgroundColor: COLORS.white,
              }}
            >
              <Header navigation={navigation} />
              <Categories />
              <Popular addToCart={addToCart} />
            </ScrollView>
          )}
        </Stack.Screen>
        
        {/* Cart Screen */}
        <Stack.Screen name="Cart">
          {() => (
            <CartScreen
              cartItems={cartItems}
              setCartItems={setCartItems}
              clearCart={clearCart} // Pass clearCart function to CartScreen
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
