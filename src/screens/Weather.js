import Geolocation from '@react-native-community/geolocation';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, CardDay, Gap } from '../components';
import { getCurrentWeather } from '../services';
import { FONT_MEDIUM, GRAY_MEDIUM, PRIMARY, showToast, WHITE } from '../utils';
import moment from 'moment';
import { ICMarker, loadingLottie } from '../assets';
import LottieView from 'lottie-react-native';

const cities = [
  { name: 'Jember' },
  { name: 'Surabaya' },
  { name: 'Yogyakarta' },
  { name: 'Semarang' },
  { name: 'Bandung' },
  { name: 'Jakarta' },
];

const days = [
  { name: 'Sunday' },
  { name: 'Monday' },
  { name: 'Tuesday' },
  { name: 'Wednesday' },
  { name: 'Friday' },
  { name: 'Saturday' },
];

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weathers, setWeathers] = useState([]);
  const [currentTemprature, setCurrentTemprature] = useState(0);
  const [currentWeather, setCurrentWeather] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  const _handleGetWeather = useCallback(async (lat, long) => {
    setLoading(true);
    const [res, err] = await getCurrentWeather({
      lat,
      lon: long,
      units: 'metric',
    });
    setLoading(false);
    if (res !== undefined) {
      setCurrentTemprature(res?.main?.temp);
      setCurrentWeather(res?.weather[0]?.main);
      setCurrentLocation(res?.name);
    } else {
      setError('Gagal Mengambil Data');
      showToast('Gagal Mengambil Data');
    }
    setWeathers(res?.list);
  }, []);

  const _handleGetWeatherByLocation = useCallback(async (q = '') => {
    setLoading(true);
    const [res, err] = await getCurrentWeather({
      q,
      units: 'metric',
    });
    setLoading(false);
    if (res !== undefined) {
      setCurrentTemprature(res?.main?.temp);
      setCurrentWeather(res?.weather[0]?.main);
      setCurrentLocation(res?.name);
    } else {
      setError('Gagal Mengambil Data');
      showToast('Gagal Mengambil Data');
    }
    setWeathers(res?.list);
  }, []);

  onRefresh = useCallback(() => {
    Geolocation.getCurrentPosition((res) => {
      _handleGetWeather(res?.coords?.latitude, res?.coords?.longitude);
    });
  }, []);

  useEffect(() => {
    onRefresh();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <LottieView source={loadingLottie} autoPlay loop />
      ) : (
        <View style={{ flex: 1 }}>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
                {cities.map((res) => (
                  <Button
                    key={res?.name}
                    text={res?.name}
                    onPress={() => _handleGetWeatherByLocation(res?.name)}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={styles.weatherWrapper}>
            <Text style={styles.txtDateNow}>
              {moment().format('dddd')}, {moment().format('DD MMM YYYY')}
            </Text>
            <View style={styles.tempraturWrapper}>
              <Text style={{ fontSize: 50, ...styles.tempratur }}>
                {parseInt(currentTemprature)}
              </Text>
              <Text style={{ fontSize: 25, ...styles.tempratur }}>°C</Text>
            </View>
            <Text style={styles.txtWeather}>{currentWeather}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={ICMarker}
                height={24}
                width={24}
                style={{ maxHeight: 24, maxWidth: 24 }}
              />
              <Gap width={5} />
              <Text style={styles.txtWeather}>{currentLocation}</Text>
            </View>
          </View>
          <View style={styles.dayWrapper}>
            <View style={styles.lineTop} />
            <Gap height={10} />
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
              }
            >
              {days.map((res) => (
                <View key={res?.name}>
                  <CardDay day={res?.name} />
                  <Gap height={10} />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    paddingTop: 20,
  },
  txtCity: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: WHITE || 'transparent',
    borderRadius: 30,
    marginHorizontal: 5,
    ...FONT_MEDIUM(16),
    color: '#005082',
  },
  txtDateNow: {
    color: WHITE,
    ...FONT_MEDIUM(16),
  },
  txtWeather: {
    color: WHITE,
    ...FONT_MEDIUM(18),
    fontWeight: '600',
  },
  tempraturWrapper: {
    flexDirection: 'row',
  },
  tempratur: {
    color: WHITE,
    fontWeight: '600',
  },
  dayWrapper: {
    flex: 2,
    backgroundColor: WHITE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  lineTop: {
    width: 100,
    borderWidth: 2,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: GRAY_MEDIUM,
    borderRadius: 30,
  },
  weatherWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
