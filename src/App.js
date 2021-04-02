import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return <HomeScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
