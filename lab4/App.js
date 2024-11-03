import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './components/LaunchScreen';
import ContactListScreen from './components/ContactList';
import ContactDetailScreen from './components/ContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen name="Launch" component={LaunchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contacts" component={ContactListScreen} />
        <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
