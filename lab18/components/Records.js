// NewsList.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const NewsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://672efd23229a881691f17f4d.mockapi.io/api/v1/test')
      .then(({ data }) => {
        setItems(data);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи');
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>  
      {items.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.artist}>{item.artist}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.date}>{item.year}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 16 },
  card: { marginBottom: 16, padding: 8, backgroundColor: '#fff', borderRadius: 8 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 8 },
  date: { fontSize: 14, color: 'gray' },
});

export default NewsList;
