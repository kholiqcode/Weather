import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONT_MEDIUM, WHITE } from '../../utils';

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.txtCity}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  txtCity: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: WHITE,
    borderRadius: 30,
    marginHorizontal: 5,
    ...FONT_MEDIUM(16),
    color: '#005082',
  },
});
