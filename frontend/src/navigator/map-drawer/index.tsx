import {createDrawerNavigator} from '@react-navigation/drawer';

import MainScreen from '../../features/main';
import UserScreen from '../../features/user';
import DrawerContent from '../../shared/components/drawer-content';

const MapDrawer = createDrawerNavigator();

const MapDrawerNavigator = () => {
  return (
    <MapDrawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <DrawerContent {...props} />}>
      <MapDrawer.Screen name="Main" component={MainScreen} />
      <MapDrawer.Screen name="User info" component={UserScreen} />
    </MapDrawer.Navigator>
  );
};

export default MapDrawerNavigator;
