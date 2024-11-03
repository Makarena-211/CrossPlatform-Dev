// screens/ContactDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native';

export default function ContactDetailScreen({ route, navigation }) {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image source={contact.icon} style={styles.image} />
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
      <Button title="Open WhatsApp" onPress={() => Linking.openURL(`whatsapp://send?phone=${contact.phone}`)} />
      <Button title="Go Back to Contacts" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  phone: { fontSize: 18, color: 'gray', marginBottom: 20 },
});
