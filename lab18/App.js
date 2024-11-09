// App.js
import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsList from './components/Records';
import AddItemScreen from './components/AddItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsList">
        <Stack.Screen 
          name="NewsList" 
          component={NewsList} 
          options={({ navigation }) => ({
            title: 'Новости',
            headerRight: () => (
              <Button
                title="Добавить"
                onPress={() => navigation.navigate('AddItemScreen')}
              />
            ),
          })}
        />
        <Stack.Screen 
          name="AddItemScreen" 
          component={AddItemScreen} 
          options={{ title: 'Добавить статью' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
