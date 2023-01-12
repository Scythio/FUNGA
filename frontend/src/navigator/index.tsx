import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddMushroomScreen from '../features/add-mushroom';
import MapDrawerNavigator from './map-drawer';

export const MainNavigatorStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigatorStack.Navigator initialRouteName="MapDrawer">
        <MainNavigatorStack.Screen
          name="MapDrawer"
          component={MapDrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <MainNavigatorStack.Screen
          name="Add mushroom"
          component={AddMushroomScreen}
        />
      </MainNavigatorStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
