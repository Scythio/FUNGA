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

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 52.23;
const LONGITUDE = 20.86;
const LATITUDE_DELTA = 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface MainScreenProps {}
const MainScreen: FC<MainScreenProps> = () => {
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
      <Picker
        placeholder="Favorite Language"
        floatingPlaceholder
        enableModalBlur={false}
        topBarProps={{title: 'Languages'}}
        // style={{color: Colors.red20}}
        showSearch
        searchPlaceholder={'Search a language'}
        searchStyle={{
          color: Colors.blue30,
          placeholderTextColor: Colors.grey50,
        }}
        // onSearchChange={value => console.warn('value', value)}
        migrateTextField>
        {options.map(option => (
          <Picker.Item
            key={option.value}
            value={option}
            label={''}
            disabled={option.disabled}
          />
        ))}
      </Picker>
      <Button
        style={styles.button}
        label={'Press'}
        size={Button.sizes.medium}
        backgroundColor={Colors.red30}
      />
      <Button
        label={'Press2'}
        size={Button.sizes.medium}
        backgroundColor={Colors.green30}
      />
    </View>
  );
};

export default MainScreen;
