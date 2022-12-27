import React, {FC, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
  Colors,
  Icon,
  Incubator,
  Text,
  Picker,
  Avatar,
  Assets,
  PanningProvider,
  Typography,
  PickerProps,
  PickerMethods,
  Button,
} from 'react-native-ui-lib';

import MapView from 'react-native-maps';

import {options} from './constants/options';
import {styles} from './styles/main';
import {customStyle} from './styles/map';
import {Stack} from '../../../App';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 52.23;
const LONGITUDE = 20.86;
const LATITUDE_DELTA = 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface MainScreenProps {
  navigation: any;
}
const MainScreen: FC<MainScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        customMapStyle={customStyle}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Add mushroom')}
      />
    </View>
  );
};

export default MainScreen;
