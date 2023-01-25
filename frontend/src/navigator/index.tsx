import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddMushroomScreen from '../features/add-mushroom';
import LoginScreen from '../features/login';
import {useAppSelector} from '../store';
import {selectCurrentUser} from '../store/slices/user/user.slice';
import MapDrawerNavigator from './map-drawer';

export const MainNavigatorStack = createNativeStackNavigator();

export const UnlogNavigatorStack = createNativeStackNavigator();

const MainNavigator = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <NavigationContainer>
      {!!user ? (
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
      ) : (
        <>
          <UnlogNavigatorStack.Navigator>
            <UnlogNavigatorStack.Screen
              name="SignIn"
              component={LoginScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
              }}
            />
          </UnlogNavigatorStack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default MainNavigator;
