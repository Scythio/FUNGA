import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import MapView, {Callout, Heatmap, Marker} from 'react-native-maps';

import {styles} from './styles/main';
import {customStyle} from './styles/map';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {useAppSelector} from '../../store';
import {
  selectMushroomCollection,
  selectMushroomSpecies,
} from '../../store/slices/mushroom/mushroom.slice';
import {MushroomRecord} from '../../shared/models/mushroom-record.model';
import CardMushroomDetails from './components/card-mushroom-details';
import {FAB} from 'react-native-paper';

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
  const mushroomSpecies = useAppSelector(selectMushroomSpecies);
  const mushroomCollection = useAppSelector(selectMushroomCollection);

  const [activeMushroom, setActiveMushroom] = useState<MushroomRecord | null>(
    null,
  );

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
        onPress={() => {
          setActiveMushroom(null);
        }}>
        {mushroomCollection.map(mushroom => (
          <Marker
            coordinate={mushroom.coordinates}
            key={mushroom.id}
            onPress={event => {
              setActiveMushroom(mushroom);
            }}
          />
        ))}
        <Heatmap
          points={mushroomCollection.map(mushroom => ({
            latitude: mushroom.coordinates.latitude,
            longitude: mushroom.coordinates.longitude,
            weight: mushroom.weights,
          }))}
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
          dataSet={mushroomSpecies.map(species => ({
            id: `${species.id}`,
            title: species.name,
          }))}
        />
      </View>
      {!activeMushroom ? (
        <View style={styles.button}>
          <FAB
            visible={true}
            icon={'plus'}
            color="green"
            label="Dodaj grzyba"
            onPress={() => navigation.navigate('Add mushroom')}
          />
        </View>
      ) : (
        <View style={styles.cardMushroomDetails}>
          <CardMushroomDetails mushroom={activeMushroom} />
        </View>
      )}
    </View>
  );
};

export default MainScreen;
