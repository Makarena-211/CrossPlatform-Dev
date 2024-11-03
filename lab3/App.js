import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, TextInput, Image, Button, Alert } from 'react-native';
import AssetExample from './components/AssetExample'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <AssetExample />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
