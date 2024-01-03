import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT} from './src/theme/Screen';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/navigations/RouteNavigation';
import BottomTabs from './src/navigations/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
