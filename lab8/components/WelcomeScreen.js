// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ route }) => {
  const { username } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Добро пожаловать, {username}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
});

export default WelcomeScreen;
