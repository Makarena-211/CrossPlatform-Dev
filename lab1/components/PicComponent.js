import {View, Image} from 'react-native';

const PicComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://s0.rbk.ru/v6_top_pics/resized/768xH/media/img/2/76/347079256679762.webp',
        }}
        style={styles.image}
      />
    </View>
  );
};


const styles = ({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200
  }
})
export default PicComponent ;