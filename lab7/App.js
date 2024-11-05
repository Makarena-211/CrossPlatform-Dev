import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  const openGitHub = () => {
    Linking.openURL('https://github.com/Makarena-211');
  };

  return (
    <View style={styles.container}>
      <Button title="Visit GitHub Profile" onPress={openGitHub} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
