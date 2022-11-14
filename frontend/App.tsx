import React, {type PropsWithChildren} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import MainScreen from './src/features/main';

const Drawer = createDrawerNavigator();

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={MainScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginBottom: 50,
  },
});
export default App;
