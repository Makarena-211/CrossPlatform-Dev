import { Text, View, Button } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Hello World!</Text>
      <Button
        title="Нажми меня"
        onPress={() => Alert.alert('Кнопка нажата!')}
      />
    </View>
  );
}

export default MyApp;
