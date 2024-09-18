import { Text, SafeAreaView, StyleSheet, Linking } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import PicComponent from './components/PicComponent';

export default function App() {
  const handlePress = () => {
    Linking.openURL('https://github.com/Makarena-211'); 
  };
  return (
    
    <SafeAreaView style={styles.container}>
      <Card>
        <AssetExample />
        <Text style={styles.linkText} onPress={handlePress}>
          Подробнее о новости
        </Text>
        <PicComponent/>
        <Text style={styles.text}>
          Проблемы с ипотекой?  
          Мы поможем!     
        </Text>
      </Card>
      
      
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1'
  },
  linkText:{
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 10,
  },
  text:{
    fontSize: 14
  }
});
