import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Splash, Weather } from '../screens';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{
        headerShown: false,
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="Weather"
      component={Weather}
      options={{
        headerShown: false,
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
  </Stack.Navigator>
);

export default Router;
