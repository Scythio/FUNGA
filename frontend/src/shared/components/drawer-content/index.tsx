import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {FC} from 'react';
import {View} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Text,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface DrawerContentProps extends DrawerContentComponentProps {}

const DrawerContent: FC<DrawerContentProps> = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Robert Lewandowski</Title>
                <Caption style={styles.caption}>@rl9</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Main"
              onPress={() => {
                props.navigation.navigate('Main');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="User info"
              onPress={() => {
                props.navigation.navigate('User info');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
