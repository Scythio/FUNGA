import React, {FC, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import MapView, {Callout, Heatmap, Marker, Region} from 'react-native-maps';

import {styles} from './styles/main';
import {customStyle} from './styles/map';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {useAppDispatch, useAppSelector} from '../../store';
import {
  fetchMushroomSpecies,
  selectMushroomCollection,
  selectMushroomSpecies,
  selectMushroomSpeciesStatus,
} from '../../store/slices/mushroom/mushroom.slice';
import {MushroomRecord} from '../../shared/models/mushroom-record.model';
import CardMushroomDetails from './components/card-mushroom-details';
import {FAB} from 'react-native-paper';
import useGeolocation from '../../shared/hooks/geolocation';
import {FetchingStatus} from '../../shared/constants/fetching-status.enum';
import {
  fetchPosts,
  selectPostList,
  selectPostListStatus,
} from '../../store/slices/post/post.slice';

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
  const mushroomSpeciesStatus = useAppSelector(selectMushroomSpeciesStatus);
  const postList = useAppSelector(selectPostList);
  const postListStatus = useAppSelector(selectPostListStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    mushroomSpeciesStatus == FetchingStatus.UNSET &&
      dispatch(fetchMushroomSpecies());
  }, [mushroomSpeciesStatus]);

  useEffect(() => {
    postListStatus == FetchingStatus.UNSET && dispatch(fetchPosts());
  }, [postListStatus]);

  const [activeMushroom, setActiveMushroom] = useState<MushroomRecord | null>(
    null,
  );
  const [currentRegion, setCurrentRegion] = useState<Region>({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const {currentPosition} = useGeolocation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={currentRegion}
        customMapStyle={customStyle}
        onPress={() => {
          setActiveMushroom(null);
        }}
        showsUserLocation>
        {postList.map(post => (
          <Marker
            coordinate={{
              longitude: post.longitude,
              latitude: post.latitude,
            }}
            key={post.id}
            onPress={event => {}}
          />
        ))}
        {postList.length > 0 && (
          <Heatmap
            points={postList.map(post => ({
              latitude: post.latitude,
              longitude: post.longitude,
              weight: post.quantity,
            }))}
          />
        )}
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
