import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert } from 'react-native';

const UserProfile = () => {
  const [name, setName] = useState('');

  const handleSave = () => {
    Alert.alert("Сохранено", `Ваше имя: ${name}`);
  };

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.header}>Профиль пользователя</Text>

      <Image
        source=
        {{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={styles.profileImage}
      />

      <Text style={styles.label}>Введите ваше имя:</Text>
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={name}
        onChangeText={setName}
      />

      <Button title="Сохранить" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default UserProfile;
