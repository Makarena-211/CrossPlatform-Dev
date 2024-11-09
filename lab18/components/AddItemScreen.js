// AddItemScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';

const AddItemScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [year, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [artist, setArtist] = useState('');
  

  const addItem = () => {
    const newItem = { title, year, imageUrl: imageUrl, description, location, category, artist };

    axios
      .post('https://672efd23229a881691f17f4d.mockapi.io/api/v1/test', newItem)
      .then(() => {
        Alert.alert('Успех', 'Статья добавлена!');
        navigation.navigate('NewsList');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось добавить статью');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>  
      <TextInput
        placeholder="Назваание"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Год"
        style={styles.input}
        value={year}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="URL изображения"
        style={styles.input}
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <TextInput
        placeholder="Автор"
        style={styles.input}
        value={artist}
        onChangeText={setArtist}
        multiline
      />
      <TextInput
        placeholder="Описание"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        placeholder="Место"
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        multiline
      />
      <TextInput
        placeholder="Категория"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        multiline
      />
      <Button title="Сохранить статью" onPress={addItem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { backgroundColor: '#fff', padding: 10, marginVertical: 8, borderRadius: 8 },
});

export default AddItemScreen;
