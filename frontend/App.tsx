import React, {type PropsWithChildren} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import MainScreen from './src/features/main';
import UserScreen from './src/features/user';
import AddMushroomScreen from './src/features/add-mushroom';
import theme from './src/shared/styles/theme';
import {ThemeProvider} from '@rneui/themed';

const Drawer = createDrawerNavigator();
export const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="User info" component={UserScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Root">
          <Stack.Screen
            name="Root"
            component={Root}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Add mushroom" component={AddMushroomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
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
