import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

export default function LaunchScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    return () => scaleAnim.setValue(0);
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedView, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.title}>Welcome to the App</Text>
      </Animated.View>
      <Button title="Go to Contacts" onPress={() => navigation.navigate('Contacts')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  animatedView: { marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
});
