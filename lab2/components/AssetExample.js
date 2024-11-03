import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { flex: 0.5, backgroundColor: 'powderblue' }]}>
        <Text style={styles.textLarge}>Большой текст</Text>
      </View>

      <View style={[styles.box, { flex: 2, backgroundColor: 'skyblue' }]}>
        <Text style={styles.textMedium}>Средний текст</Text>
      </View>

      <View style={[styles.box, { flex: 3, backgroundColor: 'steelblue' }]}>
        <Text style={styles.textSmall}>Маленький текст</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLarge: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  textMedium: {
    fontSize: 18,
    color: '#fff',
  },
  textSmall: {
    fontSize: 14,
    color: '#fff',
  },
});

export default FixedDimensionsBasics;
