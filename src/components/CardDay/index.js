import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BLACK, FONT_BOLD, FONT_MEDIUM, GRAY_DARK } from '../../utils';

const CardDay = ({ weather, day }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.txtDay}>{day}</Text>
        <Text style={styles.txtDate}>Saturday, 27 March 2021</Text>
      </View>
      <View style={styles.tempraturWrapper}>
        <Text style={{ ...FONT_BOLD(20), color: GRAY_DARK }}>28</Text>
        <Text style={{ ...FONT_BOLD(15), color: GRAY_DARK }}>°C</Text>
      </View>
    </View>
  );
};

export default CardDay;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: '#D1edf7',
    borderRadius: 15,
  },
  txtDay: {
    color: BLACK,
    ...FONT_BOLD(16),
  },
  txtDate: {
    color: GRAY_DARK,
    ...FONT_MEDIUM(12),
  },
  tempraturWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
