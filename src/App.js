import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
