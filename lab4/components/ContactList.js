import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

const contacts = [
  { id: '1', name: 'Человек женщина', icon: { uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format' }, phone: '+1234567890' },
  { id: '2', name: 'Человек мужчина', icon: { uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format' }, phone: '+0987654321' },
];

export default function ContactListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ContactDetail', { contact: item })}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={contacts} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <Button title="Back to Launch Screen" onPress={() => navigation.navigate('Launch')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  icon: { width: 40, height: 40, marginRight: 10, borderRadius: 20 },
  name: { fontSize: 18 },
});
