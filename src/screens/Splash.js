import { useNavigation } from '@react-navigation/core';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { climateLottie } from '../assets';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'Weather' }] });
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView source={climateLottie} autoPlay loop />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
