// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './components/RegistrationScreen';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Регистрация' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Авторизация' }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Добро пожаловать' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
