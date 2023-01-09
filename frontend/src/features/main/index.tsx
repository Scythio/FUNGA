import React, {FC, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import {styles} from './styles/main';
import {customStyle} from './styles/map';
import {FAB} from '@rneui/themed';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 52.23;
const LONGITUDE = 20.86;
const LATITUDE_DELTA = 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const example_dataset = [
  {
    id: '1',
    title: 'hello',
  },
  {id: '2', title: 'aaaaa'},
  {id: '3', title: 'aaccc'},
];

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
        customMapStyle={customStyle}>
        <Marker
          coordinate={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
          }}
          title={'grzyb'}
          description={'To jest grzyb'}
        />
      </MapView>
      <View
        style={{
          marginTop: 20,
          width: '80%',
        }}>
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          // initialValue={selectedItem ? `${selectedItem.id}` : undefined}
          onSelectItem={item => {}}
          dataSet={example_dataset}
        />
      </View>
      <View style={styles.button}>
        <FAB
          visible={true}
          icon={{name: 'add', color: 'white'}}
          color="green"
          upperCase
          title="Dodaj grzyba"
          onPress={() => navigation.navigate('Add mushroom')}
        />
      </View>
    </View>
  );
};

export default MainScreen;
