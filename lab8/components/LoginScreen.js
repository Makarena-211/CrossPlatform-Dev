import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Успех', 'Авторизация прошла успешно!');
      navigation.navigate('Welcome', { username }); // Переход на WelcomeScreen с передачей имени пользователя
    } else {
      Alert.alert('Ошибка', 'Введите имя пользователя и пароль');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Войти</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Имя пользователя"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
        <Text style={styles.registerButtonText}>Войти</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.loginButtonText}>Нет аккаунта? Зарегистрируйтесь</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
