import React, { useState }  from 'react';
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
  Button
} from 'react-native-ui-lib';

import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 52.23;
const LONGITUDE = 20.86;
const LATITUDE_DELTA = 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];

const options = [
  {label: 'JavaScript', value: 'js'},
  {label: 'Java', value: 'java'},
  {label: 'Python', value: 'python'},
  {label: 'C++', value: 'c++', disabled: true},
  {label: 'ananas', value: '1'},
  {label: 'babana', value: '2'},
  {label: 'kukumba', value: '3'},
  {label: 'zagoi', value: '4'},
  {label: 'polit', value: '5'},
  {label: 'zimbo', value: '6'},
  {label: 'sacrip', value: '7'},

];

class MapStyle extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
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
                  searchStyle={{color: Colors.blue30, placeholderTextColor: Colors.grey50}}
                  // onSearchChange={value => console.warn('value', value)}
                  migrateTextField
                >
                  {options.map((option)=>(
                    <Picker.Item key={option.value} value={option} label={''} disabled={option.disabled}/>
                  ))}
                </Picker>
        <Button style={styles.button} label={'Press'} size={Button.sizes.medium} backgroundColor={Colors.red30}/>
        <Button label={'Press2'} size={Button.sizes.medium} backgroundColor={Colors.green30}/>
      </View>
    );
  }
}

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
  }
});

export default MapStyle;